
import { ApiError } from "../types/ApiError";
import { Destination } from "../types/Destination";
import { ErrorType } from "../types/enum/ErrorType";



const destinations: Destination[] = [
  {
    "id": "dest_1",
    "name": "Boracay",
    "country": "Philippines",
    "duration": "5D4N",
    "image": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",

  },
  {
    "id": "dest_2",
    "name": "Baros",
    "country": "Maldives",
    "duration": "7D6N",
    "image": "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
  },
  {
    "id": "dest_3",
    "name": "Bali",
    "country": "Indonesia",
    "duration": "3D2N",
    "image": "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",

  },
  {
    "id": "dest_4",
    "name": "Palawan",
    "country": "Philippines",
    "duration": "3D2N",
    "image": "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80",

  }
];


export async function fetchTrendingDestinationsAPI(token: string): Promise<Destination[] | ApiError> {
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