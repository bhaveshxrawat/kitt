import { delayTime } from "@/consts";

const fetchData = (customDelay?: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched Data");
    }, customDelay ?? delayTime);
  });
};

export default fetchData;
