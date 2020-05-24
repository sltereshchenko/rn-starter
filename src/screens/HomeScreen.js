import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}> HomeScreen </Text>
      <Button
        onPress={() => navigation.navigate('Component')}
        title="Go To Components"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go To Images"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go To Counter"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go To Color"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go To Color Square"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go To Color Text Name"
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go To Box Screen"
      />
      <TouchableOpacity onPress={
        () => navigation.navigate('List')
      }>
        <Text>Go To see demo!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
