import {_endpoints} from '../apis';

export const getRoute = (baseRoute: string, params: {[key: string]: any}) => {
  let route = baseRoute;
  if (params) {
    Object.keys(params).forEach(k => {
      const value = params[k];
      console.log(route);
      route = route.replace(':' + k, value);
    });
  }
  return route;
};
