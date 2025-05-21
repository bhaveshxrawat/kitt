import type { Metadata } from "next";
import ResultLoader from "../components/ui/Result.LoaderSec";
import SearchHeader from "../components/Search.Header";
import { Suspense } from "react";
import DelayedFlightResults from "../components/ui/DelayedFlightResult";
import dynamic from "next/dynamic";

const Delay = dynamic(() => import("../components/ui/DelayedFlightResult"), {
  ssr: false,
  loading: () => <ResultLoader />,
});

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
        <Delay />
      </main>
    </div>
  );
};

export default page;
