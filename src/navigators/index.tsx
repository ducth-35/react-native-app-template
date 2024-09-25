import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PublicRoutes} from './public';
import {PrivateRoutes} from './private';

export const _routes = {
  publics: 'Public-routes',
  privates: 'Private-routes',
  home_page: 'Home-page',
  profile_page: 'Profile-page',
};

export const AuthorizeStack = createNativeStackNavigator();

export const Navigations: React.FC = () => {
  //define your authorizator flag
  const flag = true;
  return (
    <NavigationContainer>
      <AuthorizeStack.Navigator initialRouteName={_routes.home_page}>
        {flag ? (
          <AuthorizeStack.Group>
            {PublicRoutes.map(screen => screen)}
          </AuthorizeStack.Group>
        ) : (
          <AuthorizeStack.Group>
            {PrivateRoutes.map(screen => screen)}
          </AuthorizeStack.Group>
        )}
      </AuthorizeStack.Navigator>
    </NavigationContainer>
  );
};
