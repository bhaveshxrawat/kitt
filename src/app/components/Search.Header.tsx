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

const SearchHeader = () => {
  const cardHeader = false;
  return (
    <header className="py-7">
      <search className="max-w-[75rem] mx-auto px-[4.5rem]">
        <div className="flex justify-between items-center">
          <Sheet>
            <SheetTrigger asChild>
              <div className="cursor-pointer relative flex gap-4 justify-between items-center p-2 pl-6 rounded-[25px] basis-[41.375rem] max-w-[41.375rem] border border-[#E6E8EB]">
                <p className="tracking-wider text-ellipsis basis-[12.5rem] whitespace-nowrap overflow-hidden">
                  <strong className="font-semibold text-ellipsis uppercase">
                    CDG
                  </strong>
                  &nbsp;
                  <span>Paris Charles De Guale</span>
                </p>
                <Separator
                  orientation="vertical"
                  className="h-[26px] w-px bg-[#E6E8EB] shrink-0"
                />
                <p className="tracking-wider text-ellipsis basis-[12.5rem] whitespace-nowrap overflow-hidden">
                  <strong className="font-semibold text-ellipsis uppercase">
                    DXB
                  </strong>
                  &nbsp;
                  <span>Dubai International Airport</span>
                </p>
                <Separator
                  orientation="vertical"
                  className="h-[26px] w-px bg-[#E6E8EB] shrink-0"
                />
                <strong className="font-semibold text-nowrap">
                  Jun 25 - Jul 2
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
                  <Card className="shadow-none border-none">
                    {cardHeader && (
                      <CardHeader className="p-0 mb-6">
                        <span className="px-3 py-[0.625rem] font-medium leading-4 flex justify-center w-[127px] bg-[#F5F7FA] rounded-md">
                          Flights
                        </span>
                      </CardHeader>
                    )}
                    <CardContent className="p-0 h-[3.75rem] flex gap-6">
                      <div className="flex flex-1 gap-3">
                        <Select>
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
                                <SelectItem
                                  value={airport.code}
                                  key={airport.code}
                                >
                                  {airport.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <button className="self-center w-[3.25rem] shrink-0 aspect-square bg-[#F5F7FA] flex items-center justify-center rounded-full">
                          <ArrowRightLeft width={20} height={20} />
                        </button>
                        <Select>
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
                                <SelectItem
                                  value={airport.code}
                                  key={airport.code}
                                >
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
                      >
                        <Search width={16} height={16} />
                        Search flights
                      </Button>
                    </CardFooter>
                  </Card>
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
