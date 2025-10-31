import { ApiError } from "../types/ApiError";

const isApiError = (res: unknown): res is ApiError => {
  return typeof res === "object" && res !== null && "type" in res && "message" in res;
};

export default isApiError;