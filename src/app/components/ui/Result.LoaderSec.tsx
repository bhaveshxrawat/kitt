import "@/styles/indLoader.css";
import SkeletonCard from "./SkeletonCard";
import ResultDeterminateLoader from "../Result.DeterminateLoader";
import IndeterminateLoader from "./IndeterminateLoader";

const ResultLoader = () => {
  return (
    <>
      <IndeterminateLoader cn="relative" />
      <div
        className="pt-[3.875rem] max-w-[75rem] mx-auto px-[4.5rem]"
        aria-hidden="true"
      >
        <ResultDeterminateLoader cn="absolute left-1/2 -translate-x-1/2 z-[2] mt-5" />
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResultLoader;
