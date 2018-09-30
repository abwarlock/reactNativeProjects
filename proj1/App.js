import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Red from './companents/Red'
import Blue from './companents/Blue'
import Green from './companents/Green'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Red />
        <Blue />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
