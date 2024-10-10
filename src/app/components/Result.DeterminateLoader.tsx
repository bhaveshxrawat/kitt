"use client";
import "./Result.DeterminateLoader.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { delayTime } from "@/consts";

const ResultDeterminateLoader = ({ cn }: { cn: string }) => {
  const interval = delayTime / 3;
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        const newProgress = oldProgress + 100 / 3;
        return newProgress;
      });
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, [interval]);
  return (
    <Card className={`p-0 w-[20rem] h-[18.75rem] rounded-2xl ${cn}`}>
      <CardHeader className="p-0">
        <figure>
          <Image
            src="/assets/airplane.gif"
            alt="Illustration"
            width="150"
            height="150"
            className="h-[136px] mx-auto"
          />
        </figure>
      </CardHeader>
      <CardContent className="rsl p-3 flex flex-col gap-6 text-[#C9CACC] text-[18px] tracking-wider line-height-[18px]">
        <p
          className={`${progress < 100 / 3 ? "isActive" : ""} ${
            progress >= 100 / 3 ? "isDone" : ""
          }`}
        >
          Searching 400+ flights
        </p>
        <p
          className={`${
            progress >= 100 / 3 && progress <= 2 * (100 / 3) ? "isActive" : ""
          } ${progress > 2 * (100 / 3) ? "isDone" : ""}`}
        >
          Attaching company rules
        </p>
        <p
          className={`${progress > 2 * (100 / 3) && "isActive"} ${
            progress === 100 && "isDone"
          }`}
        >
          Serving best results
        </p>
      </CardContent>
    </Card>
  );
};

export default ResultDeterminateLoader;
