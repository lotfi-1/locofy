
import { ApiError } from "../types/ApiError";
import { Flight } from "../types/Flight";
import { apiFetch } from "./apiClient";


const flight: Flight = {
  "id": "fl_2209",
  "from": {
    "city": "Singapore",
    "code": "SIN"
  },
  "to": {
    "city": "Los Angeles",
    "code": "LAX"
  },
  "departureDate": "2025-05-01T08:00:00Z",
  "daysToGo": 4,
  "priceUSD": 1299,
  "status": "upcoming",
  "airline": "Pacific Air",
  "covidAdvisory": {
    "message": "Please check your destination’s latest COVID-19 guidelines before travel.",
    "link": "https://example.com/covid-advisory"
  }
};


export async function upcomingFlight(token: string): Promise<Flight | ApiError> {
  // return await apiFetch("/upcoming-flight", {
  //   headers: {
  //     "Authorization": `Bearer ${token}`,
  //   }
  // });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(flight);
    }, 1000);
  });
}