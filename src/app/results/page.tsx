import type { Metadata } from "next";
import ResultLoader from "../components/ui/Result.LoaderSec";
import SearchHeader from "../components/Search.Header";
import { Suspense } from "react";
import DelayedFlightResults from "../components/ui/DelayedFlightResult";

export const metadata: Metadata = {
  title: "Results",
  description: "Business Travel Reimagined",
};

const page = () => {
  return (
    <div>
      <SearchHeader />
      <main>
        <Suspense fallback={<ResultLoader />}>
          <DelayedFlightResults />
        </Suspense>
      </main>
    </div>
  );
};

export default page;
