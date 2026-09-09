import {apiClient} from '../../lib/api/client';
import {getRoute} from '../../utils';
import type {Todo} from './types';

const endpoints = {
  getOne: 'todos/:id',
  create: 'todos',
};

export const fetchOneTodo = (id: string, signal?: AbortSignal) =>
  apiClient.get<Todo>(getRoute(endpoints.getOne, {id}), {signal});

export const createTodo = (payload: Pick<Todo, 'title' | 'userId'>) =>
  apiClient.post<Todo>(endpoints.create, payload);
