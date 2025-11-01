import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Flight } from '../../types/Flight';
import { ApiError } from '../../types/ApiError';
import { isApiError } from '../../utils';
import { ErrorType } from '../../types/enum/ErrorType';
import { fetchUpcomingFlightAPI, toggleFavoriteFlightApi } from '../../services';

interface FlightState {
  upcomingFlight: Flight | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: ApiError | null;
}

const initialState: FlightState = {
  upcomingFlight: null,
  isLoading: false,
  isRefreshing: false,
  error: null
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

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    updateFlight: (state, action) => {
      state.upcomingFlight = action.payload;
    },
    resetFlight: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingFlight.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUpcomingFlight.fulfilled, (state, action: PayloadAction<Flight>) => {
        state.isLoading = false;
        state.upcomingFlight = action.payload;
        state.error = null;
      })
      .addCase(fetchUpcomingFlight.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as ApiError;
      });

    builder
      .addCase(refreshUpcomingFlight.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUpcomingFlight.fulfilled, (state, action: PayloadAction<Flight>) => {
        state.isRefreshing = false;
        state.upcomingFlight = action.payload;
        state.error = null;
      })
      .addCase(refreshUpcomingFlight.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload as ApiError;
      });

  },
});

export const { clearError, updateFlight, resetFlight } = flightSlice.actions;
export default flightSlice.reducer;