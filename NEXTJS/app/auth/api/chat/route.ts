import { google } from "@ai-sdk/google";
import { type CoreMessage, streamText } from "ai";

export const maxDuration = 30;


const initialHistory: CoreMessage[] = [
  {
    role: "user",
    content: `This is the context to train yourself -, you have to act as a customer support chatbot throughout the chat and say I am a chatbot always before starting your sentence and answer questions`
  },
];

export async function POST(req: Request) {
  
  console.log(req);
  const { messages }: { messages: CoreMessage[] } = await req.json();

  // Combine the initial history with the incoming messages
  console.log(messages);
  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    system: "You are a helpful assistant",
    messages: messages,
  });

  return result.toAIStreamResponse();
}
