// Import libraries to create components
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Code to create a component
// App Component
// A Component is a JavaScript function that returns JSX
const App = () => (
  // this is JSX
  <Text>Hello World</Text>
);

// Render the components
AppRegistry.registerComponent('albums', () => App);
