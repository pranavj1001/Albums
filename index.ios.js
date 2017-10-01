// Import libraries to create components
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Code to create a component
// App Component
// A Component is a JavaScript function that returns JSX
// App Component is also our root component
const App = () => (
  // this is JSX
  <Text>Hello World</Text>
);

// Render the components
// use AppRegistry for root components only
AppRegistry.registerComponent('albums', () => App);
