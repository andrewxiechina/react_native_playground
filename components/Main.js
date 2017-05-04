import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StatusBar,
  Button, 
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text>Main Page</Text>
        <Button onPress={function() { this.props.navigation.navigate('Pokedex'); }.bind(this)} title={"Pokedex"}></Button>

      </View>
    )
  }
}
