import type { Metadata } from "next";
import ResultLoader from "../components/ui/Result.LoaderSec";
import SearchHeader from "../components/Search.Header";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const DelayedFlightResults = dynamic(
  () => import("../components/ui/DelayedFlightResult"),
  { ssr: false }
);
export const metadata: Metadata = {
  title: "Results",
  description: "Business Travel Reimagined",
};

const page = () => {
  return (
    <div>
      <SearchHeader />
      <main>
        {/* <ResultLoader /> */}
        <Suspense fallback={<ResultLoader />}>
          <DelayedFlightResults />
        </Suspense>
      </main>
    </div>
  );
};

export default page;
