import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export const GoalList = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>Goal List Screen</Text>
    </SafeAreaView>
  );
};
