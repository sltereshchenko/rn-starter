import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1'},
    {name: 'Friend #2'},
    {name: 'Friend #3'},
  ];

  return (
    <FlatList
      // horizontal
      keyExtractor = {(friend) => friend.name}
      data={friends}
      renderItem={({item}) => {
        return <Text style={styles.textStyle}>Friend: {item.name}</Text>;
      }
      }
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,

  },
});

export default ListScreen;
