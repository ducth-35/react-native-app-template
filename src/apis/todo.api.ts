import Api, {_endpoints} from '.';
import {getRoute} from '../utils';

export const fetchOneTodo = (id: string) =>
  Api.get(getRoute(_endpoints.todo.getOne, {id: id}));
