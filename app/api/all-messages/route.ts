import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest, res: NextResponse) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error("No OpenAI API key found in environment");
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const { thread_id } = await req.json();

  try {
    const messages = await openai.beta.threads.messages.list(thread_id);
    return NextResponse.json({
      messages: messages.data,
    });
  } catch (err: any) {
    console.error(err?.message);
    return NextResponse.json(err?.message, { status: 500 });
  }
}
