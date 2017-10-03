import React, { Component } from 'react';
import { Image } from 'react-native';
import axios from 'axios';

// get your access token for free at spotify
const accessToken = '';

class AlbumImage extends Component {
  state = { url: 'http://image10.bizrate-images.com/resize?sq=60&uid=2216744464' };

  componentWillMount() {
    axios({
        method: 'get',
        url: this.props.artist,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
    }).then(response => {
      if (response.data.images.length !== 0) {
        this.setState({ url: response.data.images[2].url });
      }
    });
  }

  render() {
    return (
      <Image style={styles.thumbnailStyle} source={{ uri: this.state.url }} />
    );
  }
}

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  }
}

export default AlbumImage;
