import { createAssistant, getAssistants } from "@/lib/assistants";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest, res: NextResponse) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error("No OpenAI API key found in environment");
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEy });

  const { user, name, lastname, language, sex } = await req.json();

  try {
    const myAssistant = await openai.beta.assistants.create({
      name: `${name} ${lastname}`,
      instructions: `You are ${name} ${lastname}, a ${language}, ${sex} language learning assistant fluent in ${language} also friend of a user who wants to learn ${language}. Your goal is to help users learn a ${language} language. Greet the user, provide 3 conversation topics, be simple in answering, act like you are user's friend who is chating with him and sometimes gives advice on vocabulary, and grammar guidance. Encourage the user to ask questions and engage in interactive language exercises. Remember to reflect your ${language} background, ${sex} identity, and fluency in ${language}. Keep the conversation friendly and motivating. Please address the user with his name: ${user}.`,
      model: "gpt-4",
    });
    if (myAssistant) {
      const thread = await openai.beta.threads.create();
      if (thread) {
        await createAssistant(
          thread.id,
          myAssistant.id,
          name,
          lastname,
          sex,
          language,
          ""
        );
        return NextResponse.json(thread);
      }
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json("Error creating assistant");
  }
}

export async function GET() {
  try {
    const assistants = await getAssistants();
    return NextResponse.json(assistants);
  } catch (err) {
    console.error(err);
    return NextResponse.json("Error getting assistants");
  }
}
