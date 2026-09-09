import {apiClient} from '../../lib/api/client';
import {getRoute} from '../../utils';
import type {User} from './types';

const endpoints = {
  getOne: 'users/:id',
  update: 'users/:id',
};

export const fetchOneUser = (id: string, signal?: AbortSignal) =>
  apiClient.get<User>(getRoute(endpoints.getOne, {id}), {signal});

export const updateUser = (id: string, payload: Partial<Pick<User, 'name' | 'email'>>) =>
  apiClient.patch<User>(getRoute(endpoints.update, {id}), payload);
