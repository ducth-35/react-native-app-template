import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { APP_SCREEN, RootStackParamList } from './screen-type';
import { HomeScreen, ProfileScreen } from '../screens';
import { navigationRef } from './navigation-services';
import { EnvBadge } from '../components/EnvBadge';

export const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigations: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <EnvBadge />
      <Stack.Navigator initialRouteName={APP_SCREEN.HOME}>
        <Stack.Screen name={APP_SCREEN.HOME} component={HomeScreen} />
        <Stack.Screen name={APP_SCREEN.PROFILE} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
