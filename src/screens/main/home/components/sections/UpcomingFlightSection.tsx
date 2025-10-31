import React from 'react';

import { FlightCard } from '../FlightCard';
import { ErrorView } from '../ErrorView';
import { EmptyState } from '../EmptyState';
import { FlightCardSkeleton } from '../skeletons/FlightCardSkeleton';

interface UpcomingFlightSectionProps {
  upcomingFlight: any;
  isLoading: boolean;
  error: any;
  onRetry: () => void;
}

export const UpcomingFlightSection = ({
  upcomingFlight,
  isLoading,
  error,
  onRetry,
}: UpcomingFlightSectionProps) => {
  if (isLoading) {
    return <FlightCardSkeleton />;
  }

  if (error) {
    return <ErrorView error={error} onRetry={onRetry} />;
  }

  if (!upcomingFlight) {
    return <EmptyState />;
  }

  return <FlightCard flight={upcomingFlight} />;
};
