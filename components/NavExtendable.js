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
    		<View style={[styles.row, styles.bgPrimary]}>
          <TouchableOpacity onPress ={() => this.toggleNav()}  style={[styles.btnBlock, styles.bgPrimary, {alignItems: 'flex-start'}]}>
            <Text style={[styles.h2, styles.cf, {marginLeft: 10}]}>#</Text>
          </TouchableOpacity>

          <Text style={[styles.h3, styles.cf, {marginLeft: 10}]}>ACE TRAINER ALICE</Text>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}  style={[styles.btnBlock, styles.bgPrimary, {alignItems: 'flex-end'}]}>
            <Image source={require('../images/trainer.png')} resizeMode='contain' style={{width:30, height:30}}/>
    		  </TouchableOpacity>

        </View>
        {this.state.showNav ? (
          <View style={[styles.row, styles.bgPrimary]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pokedex')} style={[styles.btnBlock, styles.bgPrimary]}>
              <Text style={[styles.h4, styles.cf]}>POKEDEX</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={[styles.btnBlock, styles.bgPrimary]}>
              <Text style={[styles.h4, styles.cf]}>POKEDEX</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={[styles.btnBlock, styles.bgPrimary]}>
              <Text style={[styles.h4, styles.cf]}>POKEDEX</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={[styles.btnBlock, styles.bgPrimary]}>
              <Text style={[styles.h4, styles.cf]}>POKEDEX</Text>
            </TouchableOpacity>
          </View>
        ) : (
          null
        )}
      </View>
  		)
  }
}
