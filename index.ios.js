// Import libraries to create components
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Code to create a functional component
// App Component
// A Functional Component is a JavaScript function that returns JSX
// App Component is also our root component
// Header Component is the child component of App component
const App = () => (
  // this is JSX
  <View>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

// Render the components
// use AppRegistry for root components only
AppRegistry.registerComponent('albums', () => App);
