import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NewSpend } from '../../screens/spends/new/new';
import { SpendList } from '../../screens/spends/list/list';

const { Screen, Navigator } = createStackNavigator();

export const SpendStackNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen component={NewSpend} name="spend/new" />
      <Screen component={SpendList} name="spend/list" />
    </Navigator>
  );
};
