"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
const Loading = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const createCalled = useRef(false);

  const create = async () => {
    const companyurl = window.localStorage.getItem("companyurl");
    const id = window.localStorage.getItem("UserId");
    const test = await fetch("http://localhost:8080/context/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: companyurl, UserId: id }),
    });
    const ans = await test.json();
    console.log(ans);
    router.push('/chat');
  };

  useEffect(() => {
    // Only run the create function if it hasn't been called before
    if (!createCalled.current) {
      createCalled.current = true; // Mark as called
        create(); // Run create function
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
      <div className="flex flex-col space-y-3 p-4 w-[450px]">
        <Skeleton className="h-[60px] w-full rounded-t-lg bg-slate-400" />

        <div className="flex flex-col space-y-4 h-[300px] p-2 overflow-hidden bg-slate-300 rounded-b-lg">
          <div className="flex space-x-2 space-y-4">
            <Skeleton className="h-10 w-10 rounded-full bg-slate-500" />
            <div className="flex flex-col space-y-2">
              <Skeleton className="h-4 w-32 bg-slate-500" />
              <Skeleton className="h-4 w-48 bg-slate-500" />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <div className="flex flex-col space-y-2 items-end">
              <Skeleton className="h-4 w-32 bg-slate-500" />
              <Skeleton className="h-4 w-48 bg-slate-500" />
            </div>
            <Skeleton className="h-10 w-10 rounded-full bg-slate-500" />
          </div>

          <div className="flex space-x-2">
            <Skeleton className="h-10 w-10 rounded-full bg-slate-500" />
            <div className="flex flex-col space-y-2">
              <Skeleton className="h-4 w-24 bg-slate-500" />
              <Skeleton className="h-4 w-36 bg-slate-500" />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <div className="flex flex-col space-y-2 items-end">
              <Skeleton className="h-4 w-28 bg-slate-500" />
              <Skeleton className="h-4 w-36 bg-slate-500" />
            </div>
            <Skeleton className="h-10 w-10 rounded-full bg-slate-500" />
          </div>
        </div>

        <Skeleton className="h-12 w-full rounded-lg bg-slate-400" />
      </div>

      <div className="flex items-center">
        <p className="text-lg font-medium mr-2">Loading</p>
        <div className="flex space-x-1">
          <span className="animate-bounce">.</span>
          <span className="animate-bounce delay-200">.</span>
          <span className="animate-bounce delay-400">.</span>
        </div>
      </div>
    </main>
  );
};

export default Loading;
