"use client";

import { Button } from "@/components/ui/button";
import "./SearchForm.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import SelectDate from "@/app/components/Search.Date";
import { ArrowRightLeft, Search } from "lucide-react";
import data from "@/data.json";
import { useRouter } from "next/navigation";
import { useUserData } from "@/providers/UserDataProvider";

const SearchForm = ({
  cn,
  cardHeader,
}: {
  cn: string;
  cardHeader: boolean;
}) => {
  const router = useRouter();
  const { whereFrom, setWhereFrom, whereTo, setWhereTo } = useUserData();
  return (
    <Card className={cn}>
      {cardHeader && (
        <CardHeader className="p-0 mb-6">
          <span className="px-3 py-[0.625rem] font-medium leading-4 flex justify-center w-[127px] bg-[#F5F7FA] rounded-md">
            Flights
          </span>
        </CardHeader>
      )}
      <CardContent className="p-0 h-[3.75rem] flex gap-6">
        <div className="flex flex-1 gap-3">
          <Select value={whereFrom} onValueChange={setWhereFrom}>
            <SelectTrigger className="text-base border border-[#E6E8EB] p-3 outline-none h-full focus:outline-none focus:border-[#000] justify-normal gap-[0.625rem]">
              <svg
                width="20"
                className="target-icon"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2003_1382)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0002 0.833313C10.4604 0.833313 10.8335 1.20641 10.8335 1.66665V2.54575C14.3098 2.93004 17.0701 5.6903 17.4544 9.16665H18.3335C18.7937 9.16665 19.1668 9.53974 19.1668 9.99998C19.1668 10.4602 18.7937 10.8333 18.3335 10.8333H17.4544C17.0701 14.3097 14.3098 17.0699 10.8335 17.4542V18.3333C10.8335 18.7935 10.4604 19.1666 10.0002 19.1666C9.53992 19.1666 9.16683 18.7935 9.16683 18.3333V17.4542C5.69048 17.0699 2.93023 14.3097 2.54594 10.8333H1.66683C1.20659 10.8333 0.833496 10.4602 0.833496 9.99998C0.833496 9.53974 1.20659 9.16665 1.66683 9.16665H2.54594C2.93023 5.6903 5.69048 2.93004 9.16683 2.54575V1.66665C9.16683 1.20641 9.53992 0.833313 10.0002 0.833313ZM10.0002 4.16665C6.7785 4.16665 4.16683 6.77832 4.16683 9.99998C4.16683 13.2216 6.7785 15.8333 10.0002 15.8333C13.2218 15.8333 15.8335 13.2216 15.8335 9.99998C15.8335 6.77832 13.2218 4.16665 10.0002 4.16665ZM10.0002 8.33331C9.07969 8.33331 8.3335 9.0795 8.3335 9.99998C8.3335 10.9205 9.07969 11.6666 10.0002 11.6666C10.9206 11.6666 11.6668 10.9205 11.6668 9.99998C11.6668 9.0795 10.9206 8.33331 10.0002 8.33331ZM6.66683 9.99998C6.66683 8.15903 8.15921 6.66665 10.0002 6.66665C11.8411 6.66665 13.3335 8.15903 13.3335 9.99998C13.3335 11.8409 11.8411 13.3333 10.0002 13.3333C8.15921 13.3333 6.66683 11.8409 6.66683 9.99998Z"
                    fill="#C9CACC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2003_1382">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <SelectValue
                placeholder="Where from?"
                className="text-[#484A4D] text-base"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {data["airports"].map((airport) => (
                  <SelectItem value={airport.code} key={airport.code}>
                    {airport.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <button className="self-center w-[3.25rem] shrink-0 aspect-square bg-[#F5F7FA] flex items-center justify-center rounded-full">
            <ArrowRightLeft width={20} height={20} />
          </button>
          <Select value={whereTo} onValueChange={setWhereTo}>
            <SelectTrigger className="text-base border border-[#E6E8EB] p-3 outline-none h-full focus:outline-none focus:border-[#000] justify-normal gap-[0.625rem]">
              <svg
                className="target-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2003_1382)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0002 0.833313C10.4604 0.833313 10.8335 1.20641 10.8335 1.66665V2.54575C14.3098 2.93004 17.0701 5.6903 17.4544 9.16665H18.3335C18.7937 9.16665 19.1668 9.53974 19.1668 9.99998C19.1668 10.4602 18.7937 10.8333 18.3335 10.8333H17.4544C17.0701 14.3097 14.3098 17.0699 10.8335 17.4542V18.3333C10.8335 18.7935 10.4604 19.1666 10.0002 19.1666C9.53992 19.1666 9.16683 18.7935 9.16683 18.3333V17.4542C5.69048 17.0699 2.93023 14.3097 2.54594 10.8333H1.66683C1.20659 10.8333 0.833496 10.4602 0.833496 9.99998C0.833496 9.53974 1.20659 9.16665 1.66683 9.16665H2.54594C2.93023 5.6903 5.69048 2.93004 9.16683 2.54575V1.66665C9.16683 1.20641 9.53992 0.833313 10.0002 0.833313ZM10.0002 4.16665C6.7785 4.16665 4.16683 6.77832 4.16683 9.99998C4.16683 13.2216 6.7785 15.8333 10.0002 15.8333C13.2218 15.8333 15.8335 13.2216 15.8335 9.99998C15.8335 6.77832 13.2218 4.16665 10.0002 4.16665ZM10.0002 8.33331C9.07969 8.33331 8.3335 9.0795 8.3335 9.99998C8.3335 10.9205 9.07969 11.6666 10.0002 11.6666C10.9206 11.6666 11.6668 10.9205 11.6668 9.99998C11.6668 9.0795 10.9206 8.33331 10.0002 8.33331ZM6.66683 9.99998C6.66683 8.15903 8.15921 6.66665 10.0002 6.66665C11.8411 6.66665 13.3335 8.15903 13.3335 9.99998C13.3335 11.8409 11.8411 13.3333 10.0002 13.3333C8.15921 13.3333 6.66683 11.8409 6.66683 9.99998Z"
                    fill="#C9CACC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2003_1382">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <SelectValue
                placeholder="Where to?"
                className="text-[#484A4D] text-base"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {data["airports"].map((airport) => (
                  <SelectItem value={airport.code} key={airport.code}>
                    {airport.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <SelectDate />
      </CardContent>
      <CardFooter className="p-0 justify-end mt-9">
        <Button
          variant="secondary"
          className="bg-[#003E39] rounded-[7px] gap-3 p-4 w-[15.5625rem] leading-4 text-base font-medium text-white hover:bg-[#003E39]/90 h-auto"
          onClick={() => {
            router.push("/results");
          }}
        >
          <Search width={16} height={16} />
          Search flights
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SearchForm;
