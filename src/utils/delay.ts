import { delayTime } from "@/consts";

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched Data");
    }, delayTime);
  });
};

export default fetchData;
