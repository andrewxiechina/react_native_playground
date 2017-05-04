import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StatusBar,
} from 'react-native';

export default class Pokedex extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text>Pokedex</Text>
      </View>
    )
  }
}
