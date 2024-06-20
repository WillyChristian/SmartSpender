import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens/home/home';

const { Screen, Navigator } = createStackNavigator();

export const HomeStackNavigation = () => {
  return (
    <Navigator>
      <Screen component={Home} name="home" />
    </Navigator>
  );
};
