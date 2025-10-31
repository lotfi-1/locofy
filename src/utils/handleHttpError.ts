import { ApiError } from "@/types/ApiError";
import { ErrorType } from "@/types/enum/ErrorType";

export default function handleHttpError(status: number): ApiError {
  switch (status) {
    case 400:
      return { type: ErrorType.VALIDATION_ERROR, message: 'Invalid request data.' };
    case 401:
      return { type: ErrorType.UNAUTHORIZED, message: 'You are not authorized.' };
    case 404:
      return { type: ErrorType.NOT_FOUND, message: 'Resource not found.' };
    case 500:
      return { type: ErrorType.SERVER_ERROR, message: 'Server error. Try again later.' };
    default:
      return { type: ErrorType.UNKNOWN_ERROR, message: 'An unexpected error occurred.' };
  }
} 