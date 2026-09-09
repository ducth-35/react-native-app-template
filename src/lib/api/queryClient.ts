import {QueryCache, QueryClient} from '@tanstack/react-query';
import type {ApiError} from './types';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
      gcTime: 5 * 60_000,
    },
    mutations: {
      retry: 0,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      const apiError = error as ApiError;
      console.warn(`[query:${query.queryKey.join('/')}]`, apiError.message);
    },
  }),
});
