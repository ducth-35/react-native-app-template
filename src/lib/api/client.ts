import axios from 'axios';
import Config from 'react-native-config';
import type {ApiError} from './types';

export const apiClient = axios.create({
  baseURL: Config.API_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

apiClient.interceptors.request.use(config => {
  // once auth exists, read the token here and attach it, e.g.:
  // const token = authStorage.getString('accessToken');
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    const apiError: ApiError = axios.isAxiosError(error)
      ? {
          status: error.response?.status,
          message: error.response?.data?.message ?? error.message,
          data: error.response?.data,
        }
      : {message: 'Unexpected network error'};
    return Promise.reject(apiError);
  },
);
