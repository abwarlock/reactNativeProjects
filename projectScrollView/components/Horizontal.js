/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView
      horizontal={true}
      pagingEnable={true}
      style={styles.container}>
        <View style={styles.outer}>
          <Text style={styles.innerText}>Welcome ScrollView</Text>
        </View>
        <View style={[styles.outer,styles.redStyle]}>
          <Text style={styles.innerText}>Building React Native App</Text>
        </View>
        <View style={[styles.outer,styles.yellowStyle]}>
          <Text style={styles.innerText}>It will work in Android,iOS</Text>
        </View>
        <View style={[styles.outer,styles.greenStyle]}>
          <Text style={styles.innerText}>With same code</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  outer:{
    flex: 1,
    backgroundColor: '#0066cc',
    alignItems: 'center',
    justifyContent: 'center',
    width :Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  innerText :{
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold'
  },
  redStyle:{
    backgroundColor: '#00BCD4',
  },
  greenStyle:{
    backgroundColor: "#43A047"
  },
  yellowStyle:{
    backgroundColor: "#CDDC39"
  },
});
