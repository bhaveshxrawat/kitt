"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { ArrowRightLeft, Search, SearchIcon, X } from "lucide-react";
import SelectDate from "../components/Search.Date";
import data from "@/data.json";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchForm from "./SearchForm";
import { findAirportNamefromCode } from "@/utils";
import { useUserData } from "@/providers/UserDataProvider";

const SearchHeader = () => {
  const { whereFrom, whereTo, departureDt, returnDt } = useUserData();
  return (
    <header className="py-7">
      <search className="max-w-[75rem] mx-auto px-[4.5rem]">
        <div className="flex justify-between items-center">
          <Sheet>
            <SheetTrigger asChild>
              <div className="cursor-pointer relative flex gap-4 justify-between items-center p-2 pl-6 rounded-[25px] basis-[41.375rem] max-w-[41.375rem] border border-[#E6E8EB]">
                <p className="tracking-wider text-ellipsis basis-[12.5rem] whitespace-nowrap overflow-hidden">
                  <strong className="font-semibold text-ellipsis uppercase">
                    {whereFrom}
                  </strong>
                  &nbsp;
                  <span>{findAirportNamefromCode(whereFrom)}</span>
                </p>
                <Separator
                  orientation="vertical"
                  className="h-[26px] w-px bg-[#E6E8EB] shrink-0"
                />
                <p className="tracking-wider text-ellipsis basis-[12.5rem] whitespace-nowrap overflow-hidden">
                  <strong className="font-semibold text-ellipsis uppercase">
                    {whereTo}
                  </strong>
                  &nbsp;
                  <span>{findAirportNamefromCode(whereTo)}</span>
                </p>
                <Separator
                  orientation="vertical"
                  className="h-[26px] w-px bg-[#E6E8EB] shrink-0"
                />
                <strong className="font-semibold text-nowrap">
                  {departureDt &&
                    returnDt &&
                    `${format(departureDt, "d MMM")} - ${format(
                      returnDt,
                      "d MMM"
                    )}`}
                </strong>
                <Separator
                  orientation="vertical"
                  className="h-[26px] w-px bg-[#E6E8EB] shrink-0"
                />
                <Button
                  variant="secondary"
                  className="p-0 h-auto w-[2.125rem] aspect-square rounded-full bg-[#E5EBEB] hover:bg-[#E6E8EB]"
                >
                  <SearchIcon
                    width={16}
                    height={16}
                    stroke="#003E39"
                    strokeWidth="1.33"
                  />
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent side="top" className="p-0">
              <SheetTitle className="sr-only">Nav</SheetTitle>
              <nav>
                <div className="max-w-[62.5rem] mx-auto py-6 pt-[4.25rem] px-6">
                  <SearchForm cn="shadow-none border-none" cardHeader={false} />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Button
            variant="outline"
            className="w-11 p-3 aspect-square border border-[#E6E8EB] rounded-full h-auto"
          >
            <X width={20} height={20} />
          </Button>
        </div>
      </search>
    </header>
  );
};

export default SearchHeader;
