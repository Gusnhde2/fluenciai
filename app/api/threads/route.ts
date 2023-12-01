import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

import { updateAssistant } from "@/lib/assistants";

export async function POST(req: NextRequest, res: NextResponse) {
  const { thread_id, run_id, assistant_id } = await req.json();
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return new NextResponse("No OpenAI API key found in environment", {
        status: 500,
      });
    }

    const openai = new OpenAI({ apiKey });

    let status;

    while (status !== "completed" && status !== "failed") {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
        const run = await openai.beta.threads.runs.retrieve(thread_id, run_id);
        status = run.status;
      } catch (err) {
        console.error(err);
        return NextResponse.json(err, { status: 500 });
      }
    }
    if (status === "completed") {
      const messages = await openai.beta.threads.messages.list(thread_id);
      const messageContent = messages.data[0].content[0];
      if ("text" in messageContent) {
        const text =
          messageContent?.text.value.length > 30
            ? messageContent?.text.value.slice(0, 30) + "..."
            : messageContent?.text.value;
        await updateAssistant(assistant_id, text || "", new Date(Date.now()));
      }
      return NextResponse.json(messages.data[0]);
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(err, { status: 500 });
  }
}
