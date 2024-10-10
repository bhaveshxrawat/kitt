import { lazy } from "react";
import { delayTime } from "@/consts";
import fetchData from "@/utils/delay";

const DelayedFlightResults = lazy(() => {
  return fetchData(delayTime).then(() => import("../FlightResults"));
});

export default DelayedFlightResults;
