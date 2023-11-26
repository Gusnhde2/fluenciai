import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest, res: NextResponse) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error("No OpenAI API key found in environment");
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const myAssistant = await openai.beta.assistants.create({
      instructions:
        "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",
      name: "Math Tutor",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4",
    });
    if (myAssistant) {
      console.log(myAssistant);
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json("Error creating assistant");
  }
  return NextResponse.json({ message: "You got yourself a new buddy!" });
}
