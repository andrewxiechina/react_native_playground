import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import InputButton from './InputButton'
import NativeButton from './NativeButton'

export default class Calculator extends Component {
  onPress(text) {
    Alert.alert(text);
  }
  render() {
    return (
      <View style={{flex: 1}}>
          <View style={{flex: 3, backgroundColor: '#666'}}></View>
          <View style={{flex: 8, backgroundColor: '#3E606F'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <InputButton text="AC" onPress={this.onPress}/>
              <InputButton text="-" />
              <InputButton text="%" />
              <InputButton text="/"  onPress={this.onPress} />
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <InputButton text="4" />
              <InputButton text="5" />
              <InputButton text="6" />
              <InputButton text="*" />
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <InputButton text="1" />
              <InputButton text="2" />
              <InputButton text="3" />
              <InputButton text="-" />
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <InputButton text="4" />
              <InputButton text="5" />
              <InputButton text="6" />
              <InputButton text="+" />
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <InputButton text="4" />
              <InputButton text="." />
              <InputButton text="=" />
              <NativeButton
                containerStyle={[styles.button, styles.buttonOrange]}
                style={[styles.text, styles.textWhite]}
                onPress={function() {this.onPress("=")}.bind(this)}
                >=</NativeButton>
            </View>
          </View>
      </View>
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
  buttonOrange: {
    backgroundColor: 'orange'
  },
  buttonDark: {
    backgroundColor: '#aaa',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
  textWhite: {
    color: 'white'
  }
});
