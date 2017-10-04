// Import libraries to create components
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import AlbumImage from './AlbumImage';
import Button from './Button';

const AlbumDetail = (props) => {
  function renderArtistNames() {
    return props.album.artists.map(artist => <Text key={artist.id}>{artist.name}</Text>);
  }

  const { headerContentStyle, albumName, thumbnailContainerStyle, albumArt } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <AlbumImage artist={props.album.artists[0].href} />
        </View>
        <View style={headerContentStyle}>
          <Text style={albumName}>{props.album.name}</Text>
          {renderArtistNames()}
        </View>
      </CardSection>

      <CardSection>
        <Image style={albumArt} source={{ uri: props.album.images[1].url }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(props.album.external_urls.spotify)}>View More</Button>
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
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumArt: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
