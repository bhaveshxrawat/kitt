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
      <Suspense>
        <SearchHeader />
      </Suspense>
      <main>
        <Suspense fallback={<ResultLoader />}>
          {/* /* @ts-expect-error Async Server Component */}
          <DelayedFlightResults />
        </Suspense>
      </main>
    </div>
  );
};

export default page;
