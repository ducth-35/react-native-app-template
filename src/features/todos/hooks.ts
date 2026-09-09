import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {createTodo, fetchOneTodo} from './api';
import type {Todo} from './types';

export const todoKeys = {
  all: ['todos'] as const,
  detail: (id: string) => ['todos', id] as const,
};

export const useGetOneTodo = (id: string) =>
  useQuery({
    queryKey: todoKeys.detail(id),
    queryFn: async ({signal}) => {
      const {data} = await fetchOneTodo(id, signal);
      return data;
    },
  });

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: Pick<Todo, 'title' | 'userId'>) => createTodo(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: todoKeys.all});
    },
  });
};
