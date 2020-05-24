import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={{...styles.textStyle, ...styles.textOneStyle}}>Text #1</Text>
      <Text style={{...styles.textStyle, ...styles.textTwoStyle}}>Text #2</Text>
      <Text style={styles.textStyle}>Text #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'red',
    height: 200,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'black',
    margin: 2,
    padding: 5,
  },
  textOneStyle: {
    flex: 1,
    alignSelf: 'flex-start',
    position: 'absolute',
  },
  textTwoStyle: {
    position: 'absolute',
    top: 25,
    // ...StyleSheet.absoluteFillObject,
  },
});

export default BoxScreen;
