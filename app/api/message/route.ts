import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

import { updateAssistant } from "@/lib/assistants";

export async function POST(req: NextRequest, res: NextResponse) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error("No OpenAI API key found in environment");
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const { message, user, threadId, assistantId } = await req.json();

  try {
    const createMessage = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: message,
    });

    if (createMessage) {
      const messageText =
        message.length > 30 ? message.slice(0, 30) + "..." : message;
      await updateAssistant(assistantId, messageText, new Date(Date.now()));
      try {
        const run = await openai.beta.threads.runs.create(threadId, {
          assistant_id: assistantId,
        });

        if (run) {
          const messages = await openai.beta.threads.messages.list(threadId);

          return NextResponse.json({
            message: messages.data[0],
            run_id: run.id,
            thread_id: run.thread_id,
          });
        }
      } catch (err: any) {
        console.error(err?.message);
        return NextResponse.json(err?.message, { status: 500 });
      }
    }
  } catch (err: any) {
    console.error(err?.message);
    return NextResponse.json(err?.message, { status: 500 });
  }
}
