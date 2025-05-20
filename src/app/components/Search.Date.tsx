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

interface SelectDateProps {
  departureDate: Date | undefined;
  returnDate: Date | undefined;
  setterFn: <Key extends keyof FormStateProps>(
    key: Key,
    value: FormStateProps[Key]
  ) => void;
}

const SelectDate: React.FC<SelectDateProps> = ({
  departureDate,
  returnDate,
  setterFn,
}) => {
  const todaysDate: Date = new Date(Date.now());
  // Helper functions to set dates with correct key
  const setDepartureDt = (day: Date | undefined) =>
    setterFn("departureDt", day);
  const setReturnDt = (day: Date | undefined) => setterFn("returnDt", day);

  return (
    <div className="flex basis-[22.875rem] gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "flex-1 justify-start text-left font-normal h-full text-base",
              !departureDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {departureDate ? (
              format(departureDate, "P")
            ) : (
              <span className="text-[#484A4D]">Departure</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            fromDate={todaysDate}
            toDate={returnDate ?? undefined}
            mode="single"
            selected={departureDate}
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
              !returnDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {returnDate ? (
              format(returnDate, "P")
            ) : (
              <span className="text-[#484A4D]">Return</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            fromDate={departureDate}
            selected={returnDate}
            onSelect={(day) => setReturnDt(day as Date)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectDate;
