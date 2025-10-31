import { ExploreSvg, FlightSvg, LocationSvg, UserSvg } from "../../assets";

export function TabBarIcon({
  routeName,
  color,
}: {
  routeName: string;
  color: string;
}) {
  const size = 20;
  if (routeName === 'Explore') return <ExploreSvg fill={color} width={size} />;
  if (routeName === 'Booking') return <LocationSvg fill={color} width={size} />;
  if (routeName === 'Search') return <FlightSvg stroke={color} width={size} />;
  if (routeName === 'Profile') return <UserSvg fill={color} width={size} />;
  return null;
}