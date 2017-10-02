// Import libraries to create components
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const accessToken = '';

// Code to create a Class Component
// Class Components are used when we want to handle dynamic data
class AlbumList extends Component {
  componentWillMount() {
    axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/browse/new-releases?country=US',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
    }).then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    );
  }
}

export default AlbumList;
