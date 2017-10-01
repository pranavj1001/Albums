// Import libraries to create components
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Code to create a component
// App Component
// A Component is a JavaScript function that returns JSX
// App Component is also our root component
// Header Component is the child component of App component
const App = () => (
  // this is JSX
  <Header headerText={'Albums!'} />
);

// Render the components
// use AppRegistry for root components only
AppRegistry.registerComponent('albums', () => App);
