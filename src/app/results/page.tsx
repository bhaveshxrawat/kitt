import type { Metadata } from "next";
import ResultLoader from "../components/ui/Result.LoaderSec";
import SearchHeader from "../components/Search.Header";
import { Suspense } from "react";
import FlightResults from "../components/FlightResults";

export const metadata: Metadata = {
  title: "Results",
  description: "Business Travel Reimagined",
};

const page = () => {
  const waitTime = 6000;
  return (
    <div>
      <SearchHeader />
      <main>
        <Suspense fallback={<ResultLoader waitTime={waitTime} />}>
          <FlightResults />
        </Suspense>
      </main>
    </div>
  );
};

export default page;
