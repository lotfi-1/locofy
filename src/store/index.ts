import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './slices/flightSlice';
import trendingReducer from './slices/trendingSlice';
import { errorMiddleware } from './middleware/errorMiddleware';


export const store = configureStore({
  reducer: {
    flight: flightReducer,
    trending: trendingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['flight/toggleFavorite/pending'],
        ignoredPaths: ['flight.loadingFlightIds'],
      },
    }).concat(errorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;