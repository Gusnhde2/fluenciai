import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest, res: NextResponse) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error("No OpenAI API key found in environment");
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const { message, user } = await req.json();

  try {
    const createMessage = await openai.beta.threads.messages.create(
      "thread_wDYrbxdN0lwzTDZYadVB1GmF",
      {
        role: "user",
        content: message,
      }
    );

    if (createMessage) {
      try {
        const run = await openai.beta.threads.runs.create(
          "thread_wDYrbxdN0lwzTDZYadVB1GmF",
          {
            assistant_id: "asst_XQT5wglurAxBlQK5d9tx9tWU",
          }
        );
        if (run) {
          const messages = await openai.beta.threads.messages.list(
            "thread_wDYrbxdN0lwzTDZYadVB1GmF"
          );
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
