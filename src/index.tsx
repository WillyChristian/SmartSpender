import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTabs } from './routes/bottomNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
};
