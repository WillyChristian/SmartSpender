import React from 'react';
import { App } from './src';
import tron from './src/settings/reactotron';

const AppContext = () => {
  if (__DEV__) {
    tron.connect();
  }

  return <App />;
};
export default AppContext;
