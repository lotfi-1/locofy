
import { ApiError } from "../types/ApiError";
import { Destination } from "../types/Destination";
import { apiFetch } from "./apiClient";



const destinations: Destination[] = [
  {
    "id": "dest_1",
    "name": "Boracay",
    "country": "Philippines",
    "duration": "5D4N",
    "image": "https://example.com/images/boracay.jpg"
  },
  {
    "id": "dest_2",
    "name": "Baros",
    "country": "Maldives",
    "duration": "7D6N",
    "image": "https://example.com/images/baros.jpg"
  },
  {
    "id": "dest_3",
    "name": "Bali",
    "country": "Indonesia",
    "duration": "3D2N",
    "image": "https://example.com/images/bali.jpg"
  },
  {
    "id": "dest_4",
    "name": "Palawan",
    "country": "Philippines",
    "duration": "3D2N",
    "image": "https://example.com/images/palawan.jpg"
  }
];


export async function trendindDestinations(token: string): Promise<Destination[] | ApiError> {
  // return await apiFetch("/trending-destinations", {
  //   headers: {
  //     "Authorization": `Bearer ${token}`,
  //   }
  // });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(destinations);
    }, 1000);
  });
}