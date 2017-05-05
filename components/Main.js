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
import NavExtendable from './NavExtendable'

export default class Nav extends Component {
  constructor(props){
    super(props)

    this.state ={
      showNav: false
    }
  }

  toggleNav(){
    this.setState((prevState, props) => {
      return {showNav: !prevState.showNav};
    });
  }

  render(){
  	return(
      <View>
        <NavExtendable navigation={this.props.navigation} />
      </View>
  		)
  }
}
