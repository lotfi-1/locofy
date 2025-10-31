import { useState, useEffect, useCallback } from 'react';
import { Flight } from '../../../../types/Flight';
import { ApiError } from '../../../../types/ApiError';
import { fetchUpcomingFlight } from '../../../../services';
import { isApiError } from '../../../../utils';
import { ErrorType } from '../../../../types/enum/ErrorType';


export const useUpcomingFlights = (token: string) => {
  const [upcomingFlight, setUpcomingFlight] = useState<Flight | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchFlight = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setIsLoading(true);
      }
      setError(null);

      const result = await fetchUpcomingFlight(token);

      if (isApiError(result)) {
        setError(result);
      } else {
        setUpcomingFlight(result);
      }
    } catch (err) {
      setError({
        type: ErrorType.UNKNOWN_ERROR,
        message: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  }, [token]);

  useEffect(() => {
    fetchFlight();
  }, [fetchFlight]);

  const refresh = useCallback(() => {
    fetchFlight(true);
  }, [fetchFlight]);

  const retry = useCallback(() => {
    fetchFlight(false);
  }, [fetchFlight]);

  return {
    upcomingFlight,
    isLoading,
    refreshing,
    error,
    refresh,
    retry
  };
};