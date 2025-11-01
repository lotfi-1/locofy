import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './slices/flightSlice';
import trendingReducer from './slices/trendingSlice';
import favoriteFlightSlice from './slices/flightFavoriteSlice';
import { errorMiddleware } from './middleware/errorMiddleware';


export const store = configureStore({
  reducer: {
    flight: flightReducer,
    favoriteFlight: favoriteFlightSlice,
    trending: trendingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;