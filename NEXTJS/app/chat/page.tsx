"use client";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { useEffect, useState, useRef } from "react";

import Markdown from "react-markdown";
import Link from "next/link";
import { SendIcon, SquareIcon } from "lucide-react";``
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/component/navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageCircle,
  Zap,
  Database,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Particles from "@/components/magicui/particles";
const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;
import { useRouter } from "next/navigation";
export default function Home() {
  const route = useRouter();
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [data, setData] = useState<string>("");
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [username, setUserName] = useState<string>("user");
  async function runChat(prompt: string) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: " " }],
        },
        {
          role: "model",
          parts: [{ text: "" }],
        },
      ],
    });

    try {
      setLoading(true);
      const result = await chat.sendMessage(prompt);
      const response = result.response;
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: `${prevMessages.length + 2}`,
          role: "assistant",
          content: response.text(),
        },
      ]);
      setData(response.text());
      scrollToBottom();
    } catch {
      console.log("Error sending prompt to gemini");
    } finally {
      setLoading(false);
    }
  }
  const scrollToBottom = () => {
    messagesEndRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInput("");
    const prompt = (event.target as HTMLFormElement)?.prompt?.value || "";
    const userid = window.localStorage.getItem("UserId");
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: `${prevMessages.length + 1}`, role: "user", content: prompt },
    ]);
    const response = await fetch(
      "http://localhost:8080/context/query-embedding",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: prompt, UserId: userid }),
      }
    );

    const context = await response.json();

    const all = context.similarDocuments;
    let temp = "";
    for (const item of all) {
      temp = temp + " " + item.context;
    }
    console.log(temp);
    const final =
      `You are a customer support chatbot. You should only respond to queries that are directly related to the given context: "${temp}". If a query is outside of this context, politely inform the user that the question is beyond the scope of this conversation. Do not mention that you were provided this context, and act as though you already possess the knowledge. Now, here is the user's query: "${prompt}"`;
    runChat(final);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  const text = `Hi ${username} , Welcome to Ailo`.split(" ");
  useEffect(() => {
    setMessages([]);
    const name = window.localStorage.getItem("username");
    if(!name){
      route.push('/auth/login');
    }
    setUserName(name);
  }, []);
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <Particles
        className="absolute inset-0 z-0 overflow-hidden"
        quantity={100}
        ease={80}
        size={2}
        color={"#000000"}
        refresh
      />
        <div className="flex flex-col h-[80vh] w-full m-10 max-w-[672px] z-10 mx-auto bg-gray-100 rounded-lg shadow-2xl border-solid ">
        
          <div className="flex-1 overflow-auto p-6 no-scrollbar">
            {messages.length === 0 && (
              <div className="relative flex flex-col text-center items-center justify-center h-full">
                <Image
                  src="/ai.png"
                  alt="AI"
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 m-4"
                />
                <p className="font-extrabold text-transparent text-3xl w-2/3 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {/* Hi {username} <br/>Welcome to the Chatbot! <br/> Ask me anything.
                   */}
                  {text.map((el, i) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.25,
                        delay: i / 10,
                      }}
                      key={i}
                    >
                      {el}{" "}
                    </motion.span>
                  ))}
                </p>
                <p className="text-sm my-3 w-2/4">
                  Ask me anything about the products, I am your customer support{" "}
                </p>
              </div>
            )}
            <div className="flex flex-col gap-4" ref={messagesEndRef}>
              {messages.map((message) =>
                message.role === "assistant" ? (
                  <div key={message.id} className="flex items-start gap-3">
                    <div className="p-2 border border-gray-700 rounded-full">
                      <Image src="/ai.png" alt="AI" width={20} height={20} />
                    </div>
    
                    <div className="bg-white rounded-lg p-3 max-w-[70%]">
                      <Markdown className="text-sm text-muted-foreground typewriter">
                        {message.content}
                      </Markdown>
                    </div>
                  </div>
                ) : (
                  <div key={message.id} className="flex justify-end">
                    <div className="bg-primary rounded-lg p-3 max-w-[70%]">
                      <p className="text-sm text-primary-foreground">
                        {message.content}
                      </p>
                    </div>
                  </div>
                )
              )}
              { isLoading && (
                <div className="flex items-start gap-3">
                  <div className="p-2 border border-gray-700 rounded-full">
                    <Image src="/ai.png" alt="AI" width={20} height={20} />
                  </div>
                  <div className="bg-gray-300 rounded-lg p-3 max-w-[70%] flex flex-col gap-3">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="bg-muted/50 px-4 py-3 flex items-center gap-2"
          >
            <div className="relative flex-1">
              <Textarea
                placeholder="Enter your prompt here"
                name="prompt"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border-none outline-none p-4 rounded-lg text-black w-full"
              />

              {!isLoading ? (
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input || isLoading}
                  className="absolute bottom-3 right-3 rounded-full"
                >
                  <SendIcon className="w-5 h-5" />
                  <span className="sr-only">Send</span>
                </Button>
              ) : (
                <Button
                  type="button"
                  size="icon"
                  disabled={!isLoading}
                  onClick={stop}
                  className="absolute bottom-3 right-3 rounded-full"
                >
                  <SquareIcon className="w-5 h-5" fill="white" />
                  <span className="sr-only">Send</span>
                </Button>
              )}
            </div>
          </form>
          {/* <p>{data}</p> */}
        </div>
      </main>
    </>
  );
}
