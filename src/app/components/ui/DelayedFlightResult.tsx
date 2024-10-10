"use server";

import { lazy } from "react";
import fetchData from "@/utils/delay";
import FlightResults from "../FlightResults";

const DelayedFlightResults = () => {
  return fetchData().then(() => {
    return <FlightResults />;
  });
};

export default DelayedFlightResults;
