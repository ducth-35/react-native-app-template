import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {fetchOneUser, updateUser} from './api';
import type {User} from './types';

export const userKeys = {
  all: ['users'] as const,
  detail: (id: string) => ['users', id] as const,
};

export const useGetOneUser = (id: string) =>
  useQuery({
    queryKey: userKeys.detail(id),
    queryFn: async ({signal}) => {
      const {data} = await fetchOneUser(id, signal);
      return data;
    },
  });

export const useUpdateUser = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: Partial<Pick<User, 'name' | 'email'>>) =>
      updateUser(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: userKeys.detail(id)});
    },
  });
};
