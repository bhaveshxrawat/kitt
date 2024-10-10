import { delayTime } from "@/consts";

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetched data");
      resolve("Fetched Data");
    }, delayTime);
  });
};

export default fetchData;
