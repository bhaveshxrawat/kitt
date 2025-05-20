"use client";
import "./Result.DeterminateLoader.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { delayTime } from "@/consts";

const ResultDeterminateLoader = ({ cn }: { cn: string }) => {
  const interval = delayTime / 3;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const updateStep = async () => {
      for (let i = 1; i <= 3; i++) {
        await new Promise((resolve) => setTimeout(resolve, interval));
        setStep(i);
      }
    };

    updateStep();
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
        <p className={`${step < 1 && "isActive"} ${step >= 1 && "isDone"}`}>
          Searching 400+ flights
        </p>
        <p
          className={`${step > 1 && step < 3 && "isActive"} ${
            step >= 2 && "isDone"
          }`}
        >
          Attaching company rules
        </p>
        <p
          className={`${step > 2 && step !== 3 && "isActive"} ${
            step === 3 && "isDone"
          }`}
        >
          Serving best results
        </p>
      </CardContent>
    </Card>
  );
};

export default ResultDeterminateLoader;
