import axios from "axios";
import type { AxiosInstance } from "axios";

export const httpBase: AxiosInstance = axios.create({
  baseURL: import.meta.env.PUBLIC_API_HOST,
});
