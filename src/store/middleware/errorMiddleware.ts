import { Middleware } from '@reduxjs/toolkit';

export const errorMiddleware: Middleware = () => (next) => (action: any) => {
  if (action?.type?.endsWith('/rejected')) {
    const error = action.payload;
    console.error('Redux Error:', error);
  }

  return next(action);
};