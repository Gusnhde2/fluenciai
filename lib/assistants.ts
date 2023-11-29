import { auth } from "@clerk/nextjs";
import prisma from "./prismadb";

export async function createAssistant(
  threadId: string,
  assistantId: string,
  name: string,
  lastname: string,
  sex: string,
  language: string,
  picture: string
) {
  const { userId } = auth();

  if (!userId) return;

  await prisma.assistant.create({
    data: {
      assistantId,
      name,
      lastname,
      sex,
      language,
      picture,
      authId: userId,
      threadId,
    },
  });
}

export async function getAssistants() {
  const { userId } = auth();
  if (!userId) return;
  const assistants = await prisma.assistant.findMany({
    where: {
      authId: userId,
    },
  });
  return assistants;
}
