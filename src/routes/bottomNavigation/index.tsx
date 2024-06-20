import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackNavigation } from '../stackNavigation/home';
import { SpendStackNavigation } from '../stackNavigation/spends';
import { GoalsStackNavigation } from '../stackNavigation/goals';

const { Navigator, Screen } = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="home-stack" component={HomeStackNavigation} />
      <Screen name="goal-stack" component={GoalsStackNavigation} />
      <Screen name="spend-stack" component={SpendStackNavigation} />
    </Navigator>
  );
};
