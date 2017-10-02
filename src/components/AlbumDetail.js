// Import libraries to create components
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  console.log(props);
  return (
    <Card>
      <CardSection>
        <Text>{props.album.name}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
