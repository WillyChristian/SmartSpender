import React from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';

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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#7ad',
    marginVertical: 30,
  },
});

export const Home = () => {
  const handlePress = () => {
    console.log('ola mundo');
  };

  return (
    <SafeAreaView style={style.container}>
      <Pressable style={style.button} onPress={() => handlePress()}>
        <Text>Teste de animação</Text>
      </Pressable>
    </SafeAreaView>
  );
};
