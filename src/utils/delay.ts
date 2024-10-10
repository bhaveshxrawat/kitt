const fetchData = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched Data");
    }, delay);
  });
};

export default fetchData;
