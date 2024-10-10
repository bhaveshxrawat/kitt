import data from "@/data.json";

function findAirportNamefromCode(code: string | undefined) {
  if (!code) return;
  const airport = data["airports"].find((airport) => airport.code === code);
  if (airport) {
    return airport.name;
  }
}

export { findAirportNamefromCode };
