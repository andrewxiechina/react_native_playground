import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';

export default class Footer extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={[styles.row, {justifyContent: 'center', height: 90}]}>
        <TouchableOpacity>
          <Image source={require('../images/pokeballicon.png')} resizeMode="contain" style={{height:35, width:35, margin:5,}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../images/close.png')} resizeMode="contain" style={{height:35, width:35, margin:5,}} />
        </TouchableOpacity>
      </View>
    )
  }
}
