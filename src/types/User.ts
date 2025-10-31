export interface User {
  id: string;
  name: string;
  location: {
    country: string;
    city: string;
  };
  bio: string;
  referralCode: string;
  profileImage: string;
}