import { Button } from "@/components/ui/button";
import "@/styles/flightresults.css";
import Image from "next/image";

const FlightResults = () => {
  return (
    <div className="pt-9 max-w-[75rem] mx-auto px-[4.5rem] max-h-[calc(100svh-7rem)] overflow-clip">
      <p className="tracking-wider text-[1.125rem] mb-6">
        Showing 356 of 767 results
      </p>
      <div className="space-y-4 flight-results">
        <article className="cursor-pointer min-h-[11.625rem] rounded-[7px] border-[#E6E8EB] border-[1px] hover:bg-[#f5f7fa] flex">
          <div className="flex-1 flex py-6 px-8">
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex gap-6">
                <div className="w-[2.625rem] aspect-square rounded-sm">
                  <Image
                    src="/assets/airlines/emirates.png"
                    alt="logo"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <span className="flight-name">Emirates • AT 4334</span>
                  <span className="timing">9:45 AM - 11:45 AM</span>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-[2.625rem] aspect-square rounded-sm">
                  <Image
                    src="/assets/airlines/luft-var1.png"
                    alt="logo"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <span className="flight-name">Lufthansa • AT 4334</span>
                  <div className="flex gap-[6px]">
                    <span className="timing">11:45 PM - 6:45 AM</span>
                    <span className="add-timing">+1 day</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-[19.375rem] flex flex-col justify-between">
              <div className="flex gap-[78px] items-end">
                <div className="flex flex-col gap-[6px] text-right">
                  <span className="airport-info">CDG - DXB</span>
                  <span className="flight-duration">2h 10min</span>
                </div>
                <span className="flight-break">Non stop</span>
              </div>
              <div className="flex gap-[78px] items-end">
                <div className="flex flex-col gap-[6px] text-right">
                  <span className="airport-info">DXB - CDG</span>
                  <span className="flight-duration">4h 10min</span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <span className="flight-break-duration">
                    6h 32m in Lisbon, Paris
                  </span>
                  <span className="flight-break">2 stops</span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[13.375rem] flex flex-col justify-end border-l-[1px] border-[#E6E8EB] p-4">
            <span className="text-[14px] leading-[14px] tracking-[0.05em] text-[#787B80]">
              from
            </span>
            <span className="text-xl leading-5 tracking-[0.02em] mt-2 mb-4">
              AED 2,456.90
            </span>
            <Button
              variant="secondary"
              className="bg-[#003E39] rounded-[7px] gap-3 px-4 py-3 leading-4 text-base font-medium text-white hover:bg-[#003E39]/90 h-auto"
            >
              Select
            </Button>
          </div>
        </article>

        <article className="cursor-pointer min-h-[11.625rem] rounded-[7px] border-[#E6E8EB] border-[1px] hover:bg-[#f5f7fa] flex">
          <div className="flex-1 flex py-6 px-8">
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex gap-6">
                <div className="w-[2.625rem] aspect-square rounded-sm">
                  <Image
                    src="/assets/airlines/emirates.png"
                    alt="logo"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <span className="flight-name">Emirates • AT 4334</span>
                  <span className="timing">9:45 AM - 11:45 AM</span>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-[2.625rem] aspect-square rounded-sm">
                  <Image
                    src="/assets/airlines/emirates.png"
                    alt="logo"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <span className="flight-name">Emirates • AT 4334</span>
                  <div className="flex gap-[6px]">
                    <span className="timing">11:45 PM - 6:45 AM</span>
                    <span className="add-timing">+1 day</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-[19.375rem] flex flex-col justify-between">
              <div className="flex gap-[78px] items-end">
                <div className="flex flex-col gap-[6px] text-right">
                  <span className="airport-info">CDG - DXB</span>
                  <span className="flight-duration">7h 10min</span>
                </div>
                <span className="flight-break">1 stop</span>
              </div>
              <div className="flex gap-[78px] items-end">
                <div className="flex flex-col gap-[6px] text-right">
                  <span className="airport-info">CDG - DXB</span>
                  <span className="flight-duration">19h 10min</span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <span className="flight-break-duration">Lisbon</span>
                  <span className="flight-break">1 stop</span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[13.375rem] flex flex-col justify-end border-l-[1px] border-[#E6E8EB] p-4">
            <span className="text-[14px] leading-[14px] tracking-[0.05em] text-[#787B80]">
              from
            </span>
            <span className="text-xl leading-5 tracking-[0.02em] mt-2 mb-4">
              AED 1,456.90
            </span>
            <Button
              variant="secondary"
              className="bg-[#003E39] rounded-[7px] gap-3 px-4 py-3 leading-4 text-base font-medium text-white hover:bg-[#003E39]/90 h-auto"
            >
              Select
            </Button>
          </div>
        </article>
        <article className="cursor-pointer min-h-[11.625rem] rounded-[7px] border-[#E6E8EB] border-[1px] hover:bg-[#f5f7fa] flex">
          <div className="flex-1 flex py-6 px-8">
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex gap-6">
                <div className="w-[2.625rem] aspect-square rounded-sm">
                  <Image
                    src="/assets/airlines/luft-var1.png"
                    alt="logo"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <span className="flight-name">Lufthansa • AT 4334</span>
                  <span className="timing">9:45 AM - 11:45 AM</span>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-[2.625rem] aspect-square rounded-sm relative">
                  <Image
                    src="/assets/airlines/luft-var2.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/assets/airlines/luft-var2.png"
                    alt="logo"
                    width={30}
                    height={30}
                    className="absolute left-[35%] top-[35%]"
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <span className="flight-name">
                    Lufthansa • AT 4334, Indigo • 6E 783
                  </span>
                  <div className="flex gap-[6px]">
                    <span className="timing">11:45 PM - 6:45 AM</span>
                    <span className="add-timing">+1 day</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-[19.375rem] flex flex-col justify-between">
              <div className="flex gap-[78px] items-end">
                <div className="flex flex-col gap-[6px] text-right">
                  <span className="airport-info">CDG - DXB</span>
                  <span className="flight-duration">7h 10min</span>
                </div>
                <span className="flight-break">Non stop</span>
              </div>
              <div className="flex gap-[78px] items-end">
                <div className="flex flex-col gap-[6px] text-right">
                  <span className="airport-info">CDG - DXB</span>
                  <span className="flight-duration">4h 10min</span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <span className="flight-break">Non-stop</span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[13.375rem] flex flex-col justify-end border-l-[1px] border-[#E6E8EB] p-4">
            <span className="text-[14px] leading-[14px] tracking-[0.05em] text-[#787B80]">
              from
            </span>
            <span className="text-xl leading-5 tracking-[0.02em] mt-2 mb-4">
              AED 2,456.90
            </span>
            <Button
              variant="secondary"
              className="bg-[#003E39] rounded-[7px] gap-3 px-4 py-3 leading-4 text-base font-medium text-white hover:bg-[#003E39]/90 h-auto"
            >
              Select
            </Button>
          </div>
        </article>
        <article className="cursor-pointer min-h-[11.625rem] rounded-[7px] border-[#E6E8EB] border-[1px] hover:bg-[#f5f7fa] flex">
          <div className="flex-1 flex py-6 px-8">
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex gap-6">
                <div className="w-[2.625rem] aspect-square rounded-sm">
                  <Image
                    src="/assets/airlines/luft-var1.png"
                    alt="logo"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <span className="flight-name">Lufthansa • AT 4334</span>
                  <span className="timing">9:45 AM - 11:45 AM</span>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-[2.625rem] aspect-square rounded-sm relative">
                  <Image
                    src="/assets/airlines/luft-var2.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/assets/airlines/luft-var2.png"
                    alt="logo"
                    width={30}
                    height={30}
                    className="absolute left-[35%] top-[35%]"
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <span className="flight-name">
                    Lufthansa • AT 4334, Indigo • 6E 783
                  </span>
                  <div className="flex gap-[6px]">
                    <span className="timing">11:45 PM - 6:45 AM</span>
                    <span className="add-timing">+1 day</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-[19.375rem] flex flex-col justify-between">
              <div className="flex gap-[78px] items-end">
                <div className="flex flex-col gap-[6px] text-right">
                  <span className="airport-info">CDG - DXB</span>
                  <span className="flight-duration">7h 10min</span>
                </div>
                <span className="flight-break">Non stop</span>
              </div>
              <div className="flex gap-[78px] items-end">
                <div className="flex flex-col gap-[6px] text-right">
                  <span className="airport-info">CDG - DXB</span>
                  <span className="flight-duration">4h 10min</span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <span className="flight-break">Non-stop</span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[13.375rem] flex flex-col justify-end border-l-[1px] border-[#E6E8EB] p-4">
            <span className="text-[14px] leading-[14px] tracking-[0.05em] text-[#787B80]">
              from
            </span>
            <span className="text-xl leading-5 tracking-[0.02em] mt-2 mb-4">
              AED 2,456.90
            </span>
            <Button
              variant="secondary"
              className="bg-[#003E39] rounded-[7px] gap-3 px-4 py-3 leading-4 text-base font-medium text-white hover:bg-[#003E39]/90 h-auto"
            >
              Select
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FlightResults;
