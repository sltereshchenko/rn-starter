import React from 'react';
import {Text, StyleSheet} from 'react-native';

const name = 'Slava';
const ComponentScreen = () => {
  return (
    <Text style={styles.textStyle}>This is components: My name is {name}</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
