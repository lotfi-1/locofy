import { useState, useEffect, useCallback } from 'react';
import { Flight } from '../../../../types/Flight';
import { ApiError } from '../../../../types/ApiError';
import { fetchTrendindDestinations } from '../../../../services';
import { isApiError } from '../../../../utils';
import { ErrorType } from '../../../../types/enum/ErrorType';
import { Destination } from '../../../../types/Destination';


export const useTrendingDestinations = (token: string) => {
  const [trendingDistinations, setTrendingDistinations] = useState<Destination[] | null>(null);
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

      const result = await fetchTrendindDestinations(token);

      if (isApiError(result)) {
        setError(result);
      } else {
        setTrendingDistinations(result);
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
    trendingDistinations,
    isLoading,
    refreshing,
    error,
    refresh,
    retry
  };
};