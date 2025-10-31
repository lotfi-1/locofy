export interface Flight {
  id: string;
  from: { city: string; code: string };
  to: { city: string; code: string };
  departureDate: string;
  daysToGo: number;
  priceUSD: number;
  status: string;
  airline: string;
  covidAdvisory?: { message: string; link: string };
  imageUrls?: string[]
}