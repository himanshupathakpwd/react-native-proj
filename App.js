import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';

import Todo from './components/Todo/';
export default class TodoApp extends Component {
  render() {
    return (
      <View style={styles.mainViewStyle}>
        <Text style={styles.mainHeading}>My App</Text>
        <Todo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'dotted'
  },
  mainHeading: {
    fontWeight: '700'
  }
});

