import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <article className="w-[66rem] h-[11.625rem] rounded-[7px] border-[#E6E8EB] border-[1px] px-8 pb-6 pt-5 flex">
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex gap-6">
          <Skeleton className="w-[2.625rem] aspect-square rounded-sm" />
          <div className="flex flex-col gap-[0.875rem]">
            <Skeleton className="w-[5.875rem] h-[11.38px] rounded-3xl" />
            <Skeleton className="w-[9.375rem] h-[15.75px] aspect-square rounded-3xl" />
          </div>
        </div>
        <div className="flex gap-6">
          <Skeleton className="w-[2.625rem] aspect-square rounded-sm" />
          <div className="flex flex-col gap-[0.875rem]">
            <Skeleton className="w-[5.875rem] h-[11.38px] rounded-3xl" />
            <div className="flex gap-[6px]">
              <Skeleton className="w-[9.375rem] h-[15.75px] rounded-3xl" />
              <Skeleton className="w-[35px] h-[10.5px] rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex gap-[78px] items-end">
          <div className="flex flex-col gap-[0.875rem]">
            <Skeleton className="w-[63.5px] h-[12.25px] rounded-3xl" />
            <Skeleton className="w-[71px] h-[15.75px] aspect-square rounded-3xl" />
          </div>
          <Skeleton className="w-[72px] h-[15.75px] aspect-square rounded-3xl" />
        </div>
        <div className="flex gap-[78px] items-end">
          <div className="flex flex-col gap-[0.875rem]">
            <Skeleton className="w-[63.5px] h-[12.25px] rounded-3xl" />
            <Skeleton className="w-[71px] h-[15.75px] aspect-square rounded-3xl" />
          </div>
          <Skeleton className="w-[72px] h-[15.75px] aspect-square rounded-3xl" />
        </div>
      </div>
    </article>
  );
};

export default SkeletonCard;
