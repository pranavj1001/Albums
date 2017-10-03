// Import libraries to create components
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// get your access token for free at spotify
const accessToken = '';

// Code to create a Class Component
// Class Components are used when we want to handle dynamic data
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/browse/new-releases?country=US',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
    }).then(response => this.setState({ albums: response.data.albums.items }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.id} album={album} />);
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
