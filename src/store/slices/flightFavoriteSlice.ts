import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Flight } from '../../types/Flight';
import { ApiError } from '../../types/ApiError';
import { isApiError } from '../../utils';
import { ErrorType } from '../../types/enum/ErrorType';
import {  toggleFavoriteFlightApi } from '../../services';

interface FlightFavoriteState {
  flight: Flight | null;
  isLoading: boolean;
  error: ApiError | null;
  favoriteAction: 'added' | 'removed' | null;
}

const initialState: FlightFavoriteState = {
  flight: null,
  isLoading: false,
  error: null,
  favoriteAction: null
};


export const toggleFavorite = createAsyncThunk(
  'flightFavorite/toggleFavorite',
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

const favoriteFlightSlice = createSlice({
  name: 'flightFavorite',
  initialState,
  reducers: {
    clearFavoriteError: (state) => {
      state.error = null;
    },
    resetFavoriteFlight: () => initialState,
  },
  extraReducers: (builder) => {

    builder
      .addCase(toggleFavorite.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.favoriteAction = null;
      })
      .addCase(toggleFavorite.fulfilled, (state, action: PayloadAction<{ flight: Flight; wasFavorite: boolean }>) => {
        state.flight = action.payload.flight;
        state.isLoading = false;
        state.error = null;
        state.favoriteAction = action.payload.wasFavorite ? 'removed' : 'added';
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.error = action.payload as ApiError;
        state.isLoading = false;
        state.favoriteAction = null;
      });
  },
});

export const { clearFavoriteError, resetFavoriteFlight } = favoriteFlightSlice.actions;
export default favoriteFlightSlice.reducer;