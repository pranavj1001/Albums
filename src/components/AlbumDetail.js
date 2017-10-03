// Import libraries to create components
import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  function renderArtistNames() {
    return props.album.artists.map(artist => <Text key={artist.id}>{artist.name}</Text>);
  }

  return (
    <Card>
      <CardSection>
        <View></View>
        <View>
          <Text>{props.album.name}</Text>
          {renderArtistNames()}
        </View>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
