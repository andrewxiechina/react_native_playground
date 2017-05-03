import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';

export default class InputButton extends Component {

  render() {
    return (
      <TouchableHighlight style={styles.button}
                          underlayColor="#777"
                          onPress={function() { this.props.onPress(this.props.text)}.bind(this)}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 30,
    color: 'black',
  }
});
