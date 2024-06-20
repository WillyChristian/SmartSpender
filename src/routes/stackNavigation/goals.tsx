import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NewGoal } from '../../screens/goals/new/new';
import { GoalList } from '../../screens/goals/list/list';

const { Screen, Navigator } = createStackNavigator();

export const GoalsStackNavigation = () => {
  return (
    <Navigator>
      <Screen component={NewGoal} name="goals/new" />
      <Screen component={GoalList} name="goals/list" />
    </Navigator>
  );
};
