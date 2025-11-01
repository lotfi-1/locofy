import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Destination } from '../../types/Destination';
import { ApiError } from '../../types/ApiError';
import { fetchTrendingDestinationsAPI } from '../../services';
import { isApiError } from '../../utils';
import { ErrorType } from '../../types/enum/ErrorType';

interface TrendingState {
  destinations: Destination[];
  isLoading: boolean;
  isRefreshing: boolean;
  error: ApiError | null;
}

const initialState: TrendingState = {
  destinations: [],
  isLoading: false,
  isRefreshing: false,
  error: null,
};

export const fetchTrendingDestinations = createAsyncThunk(
  'trending/fetch',
  async (token: string, { rejectWithValue }) => {
    try {
      const result = await fetchTrendingDestinationsAPI(token);
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

export const refreshTrendingDestinations = createAsyncThunk(
  'trending/refresh',
  async (token: string, { rejectWithValue }) => {
    try {
      const result = await fetchTrendingDestinationsAPI(token);
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

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetTrending: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingDestinations.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTrendingDestinations.fulfilled, (state, action: PayloadAction<Destination[]>) => {
        state.isLoading = false;
        state.destinations = action.payload;
        state.error = null;
      })
      .addCase(fetchTrendingDestinations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as ApiError;
      });

    builder
      .addCase(refreshTrendingDestinations.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshTrendingDestinations.fulfilled, (state, action: PayloadAction<Destination[]>) => {
        state.isRefreshing = false;
        state.destinations = action.payload;
        state.error = null;
      })
      .addCase(refreshTrendingDestinations.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload as ApiError;
      });
  },
});

export const { clearError: clearTrendingError, resetTrending } = trendingSlice.actions;
export default trendingSlice.reducer;