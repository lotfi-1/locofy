import { ApiError } from "@/types/ApiError";
import { ErrorType } from "@/types/enum/ErrorType";

export default function handleNetworkError(_err: Error): ApiError {
  return {
    type: ErrorType.NETWORK_ERROR,
    message: 'Network connection failed. Please check your internet connection.'
  };
}
