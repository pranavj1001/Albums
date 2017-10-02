// Import libraries to create components
import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Text>{props.album.name}</Text>
    </View>
  );
};

export default AlbumDetail;
