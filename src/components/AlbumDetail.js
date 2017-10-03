// Import libraries to create components
import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import AlbumImage from './AlbumImage';

const AlbumDetail = (props) => {
  function renderArtistNames() {
    return props.album.artists.map(artist => <Text key={artist.id}>{artist.name}</Text>);
  }

  return (
    <Card>
      <CardSection>
        <View>
          <AlbumImage artist={props.album.artists[0].href} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.albumName}>{props.album.name}</Text>
          {renderArtistNames()}
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  albumName: {
    fontWeight: '700'
  }
};

export default AlbumDetail;
