import { ApiError } from "../types/ApiError";
import { handleHttpError, handleNetworkError } from "../utils";



const API_BASE_URL = 'https://example.com/api';

export default async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T | ApiError> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {})
      },
      ...options
    });

    if (!response.ok) {
      return handleHttpError(response.status);
    }

    const data = (await response.json()) as T;
    return data;
  } catch (err: any) {
    return handleNetworkError(err);
  }
}



