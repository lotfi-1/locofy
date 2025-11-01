import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Flight } from '../../types/Flight';
import { ApiError } from '../../types/ApiError';
import { isApiError } from '../../utils';
import { ErrorType } from '../../types/enum/ErrorType';
import { fetchUpcomingFlightAPI, toggleFavoriteFlightApi } from '../../services';

interface FlightState {
  upcomingFlight: Flight | null;
  loading: {
    fetch: boolean;
    refresh: boolean;
    toggleFavorite: boolean;
  };
  errors: {
    fetch: ApiError | null;
    toggleFavorite: ApiError | null;
  };
  favoriteAction: 'added' | 'removed' | null;
}

const initialState: FlightState = {
  upcomingFlight: null,
  loading: {
    fetch: false,
    refresh: false,
    toggleFavorite: false,
  },
  errors: {
    fetch: null,
    toggleFavorite: null,
  },
  favoriteAction: null,
};

export const fetchUpcomingFlight = createAsyncThunk(
  'flight/fetchUpcoming',
  async (token: string, { rejectWithValue }) => {
    try {
      const result = await fetchUpcomingFlightAPI(token);
      if (isApiError(result)) {
        return rejectWithValue(result);
      }
      return result;
    } catch (error) {
      return rejectWithValue({
        type: ErrorType.UNKNOWN_ERROR,
        message: 'An unexpected error occurred. Please try again.',
      });
    }
  }
);

export const refreshUpcomingFlight = createAsyncThunk(
  'flight/refresh',
  async (token: string, { rejectWithValue }) => {
    try {
      const result = await fetchUpcomingFlightAPI(token);
      if (isApiError(result)) {
        return rejectWithValue(result);
      }
      return result;
    } catch (error) {
      return rejectWithValue({
        type: ErrorType.UNKNOWN_ERROR,
        message: 'An unexpected error occurred. Please try again.',
      });
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  'flight/toggleFavorite',
  async ({ token, flight }: { token: string; flight: Flight }, { rejectWithValue }) => {
    try {
      const wasFavorite = flight.isFavorite;
      const result = await toggleFavoriteFlightApi(token, flight);
      if (isApiError(result)) {
        return rejectWithValue(result);
      }
      return { flight: result, wasFavorite };
    } catch (error) {
      return rejectWithValue({
        type: ErrorType.UNKNOWN_ERROR,
        message: 'Failed to update favorite. Please try again.',
      });
    }
  }
);

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    clearFetchError: (state) => {
      state.errors.fetch = null;
    },
    clearFavoriteError: (state) => {
      state.errors.toggleFavorite = null;
    },
    clearAllErrors: (state) => {
      state.errors.fetch = null;
      state.errors.toggleFavorite = null;
    },
    clearFavoriteAction: (state) => {
      state.favoriteAction = null;
    },
    resetFlight: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingFlight.pending, (state) => {
        state.loading.fetch = true;
        state.errors.fetch = null;
      })
      .addCase(fetchUpcomingFlight.fulfilled, (state, action: PayloadAction<Flight>) => {
        state.loading.fetch = false;
        state.upcomingFlight = action.payload;
        state.errors.fetch = null;
      })
      .addCase(fetchUpcomingFlight.rejected, (state, action) => {
        state.loading.fetch = false;
        state.errors.fetch = action.payload as ApiError;
      });

    builder
      .addCase(refreshUpcomingFlight.pending, (state) => {
        state.loading.refresh = true;
        state.errors.fetch = null;
      })
      .addCase(refreshUpcomingFlight.fulfilled, (state, action: PayloadAction<Flight>) => {
        state.loading.refresh = false;
        state.upcomingFlight = action.payload;
        state.errors.fetch = null;
      })
      .addCase(refreshUpcomingFlight.rejected, (state, action) => {
        state.loading.refresh = false;
        state.errors.fetch = action.payload as ApiError;
      });

    builder
      .addCase(toggleFavorite.pending, (state) => {
        state.loading.toggleFavorite = true;
        state.errors.toggleFavorite = null;
        state.favoriteAction = null;
      })
      .addCase(toggleFavorite.fulfilled, (state, action: PayloadAction<{ flight: Flight; wasFavorite: boolean }>) => {
        state.upcomingFlight = action.payload.flight;
        state.loading.toggleFavorite = false;
        state.errors.toggleFavorite = null;
        state.favoriteAction = action.payload.wasFavorite ? 'removed' : 'added';
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.errors.toggleFavorite = action.payload as ApiError;
        state.loading.toggleFavorite = false;
        state.favoriteAction = null;
      });
  },
});

export const { clearFetchError, clearFavoriteError, clearAllErrors, clearFavoriteAction, resetFlight } = flightSlice.actions;
export default flightSlice.reducer;