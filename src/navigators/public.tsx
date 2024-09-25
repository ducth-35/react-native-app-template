import React from 'react';
import {AuthorizeStack, _routes} from '.';
import {HomeScreen, ProfileScreen} from '../screens';

export const PublicRoutes: JSX.Element[] = [
  <AuthorizeStack.Screen
    name={_routes.home_page}
    component={HomeScreen}
    key={_routes.home_page}
  />,
  <AuthorizeStack.Screen
    name={_routes.profile_page}
    component={ProfileScreen}
    key={_routes.profile_page}
  />,
];
