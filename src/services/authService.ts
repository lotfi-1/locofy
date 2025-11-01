import { ApiError } from "../types/ApiError";
import { User } from "../types/User";


const mockUser: User = {
  id: "u_1001",
  name: "Macy Johnson",
  location: { country: "Philippines", city: "Baguio" },
  bio: "I like the beach, mountains, forest and everything about nature! :)",
  referralCode: "NEW",
  profileImage: ""
};


export async function authorizationAPI(token: string): Promise<User | ApiError> {
  // return await apiFetch("/authorization", {
  //   headers: {
  //     "Authorization": `Bearer ${token}`,
  //   }
  // });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 1000);
  });
}
