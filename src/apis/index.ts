import axios from 'axios';

const BASE_URL = `https://jsonplaceholder.typicode.com/`;

const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  },
});

Api.interceptors.request.use(async config => {
  // add your configure here, such like req header config: access-token, etc...
  return config;
});

Api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // handle errors here
    throw error.response;
  },
);
export default Api;

export const _endpoints = {
  todo: {
    getOne: `todos/:id`,
  },
};
