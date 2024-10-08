import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results",
  description: "Business Travel Reimagined",
};

const page = () => {
  return (
    <div className="max-w-[75rem] mx-auto px-[4.5rem]">
      <header className="py-7">
        <search>
          <div className="flex justify-between items-center">
            <div className="relative flex items-center p-2 pl-6 rounded-[25px] basis-[41.375rem] border border-[#E6E8EB]">
              <Button
                variant="secondary"
                className="before:inset-0 ml-auto p-0 h-auto w-[2.125rem] aspect-square rounded-full bg-[#E5EBEB]"
              >
                <SearchIcon
                  width={16}
                  height={16}
                  stroke="#003E39"
                  strokeWidth="1.33"
                />
              </Button>
            </div>
          </div>
        </search>
      </header>
      <main></main>
    </div>
  );
};

export default page;
