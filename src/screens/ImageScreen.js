import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';
const assetsPatch = '../../assets/';
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest"
        imageSource={require(assetsPatch + 'forest.jpg')}/>
      <ImageDetail title="Beach"
        imageSource={require(assetsPatch + 'beach.jpg')}/>
      <ImageDetail title="Mountain"
        imageSource={require(assetsPatch + 'mountain.jpg')}/>
    </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {

  },
});

export default ImageScreen;
