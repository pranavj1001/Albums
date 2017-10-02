// Import libraries to create components
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
  console.log(props);
  return (
    <Card>
      <Text>{props.album.name}</Text>
    </Card>
  );
};

export default AlbumDetail;
