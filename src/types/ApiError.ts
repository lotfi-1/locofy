import { ErrorType } from "./enum/ErrorType";

export interface ApiError {
  type: ErrorType;
  message: string;
}