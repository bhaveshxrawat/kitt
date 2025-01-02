"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { useUserData } from "@/providers/UserDataProvider";

const SelectDate = () => {
  const todaysDate: Date = new Date(Date.now());
  const { departureDt, setDepartureDt, returnDt, setReturnDt } = useUserData();
  return (
    <div className="flex basis-[22.875rem] gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "flex-1 justify-start text-left font-normal h-full text-base",
              !departureDt && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {departureDt ? (
              format(departureDt, "P")
            ) : (
              <span className="text-[#484A4D]">Departure</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            fromDate={todaysDate}
            toDate={returnDt ?? undefined}
            mode="single"
            selected={departureDt}
            onSelect={(day) => setDepartureDt(day as Date)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "flex-1 justify-start text-left font-normal h-full text-base",
              !returnDt && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {returnDt ? (
              format(returnDt, "P")
            ) : (
              <span className="text-[#484A4D]">Return</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            fromDate={departureDt}
            selected={returnDt}
            onSelect={(day) => setReturnDt(day as Date)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectDate;
