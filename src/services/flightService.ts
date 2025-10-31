
import { ApiError } from "../types/ApiError";
import { ErrorType } from "../types/enum/ErrorType";
import { Flight } from "../types/Flight";


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
  "airline": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
  "covidAdvisory": {
    "message": "Please check your destination’s latest COVID-19 guidelines before travel.",
    "link": "https://example.com/covid-advisory"
  },


};


export async function fetchUpcomingFlight(token: string): Promise<Flight | ApiError> {
  // return await apiFetch("/upcoming-flight", {
  //   headers: {
  //     "Authorization": `Bearer ${token}`,
  //   }
  // });
  const error: ApiError = {
    message: "Hi im error",
    type: ErrorType.UNAUTHORIZED
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(flight);
    }, 1000);
  });
}