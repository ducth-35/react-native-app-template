import {useQuery} from '@tanstack/react-query';
import {fetchOneTodo} from '../../apis/todo.api';

export const useGetOneTodo = (id: string) => {
  return useQuery({
    queryKey: ['getOneTodo', id],
    queryFn: async () => {
      const {data} = await fetchOneTodo(id);
      return data;
    },
  });
};
