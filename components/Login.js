import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StatusBar,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './styles';

export default class Login extends Component {
  render() {
    return (
        <Image source={require("../images/background.jpg")} resizeMode="stretch" style={[styles.column, {paddingTop: 0, paddingBottom: 30, flex: 1}]}>

          <Image source={require("../images/logo.png")} style={{width: 220,}} resizeMode="contain"/>

          <View style={[styles.container, {height:250, marginBottom:30,}]}>

            <Text style={[styles.h4, styles.a5, {alignSelf: 'flex-end'}]}>REGISTER</Text>
            {/* Log in */}

            <View style={[styles.column, {height: 150}]}>
              <TextInput placeholder = "USERNAME" placeholderTextColor = "white" style={[styles.btnBlock, styles.h4, styles.ba5]}/>
              <TextInput placeholder = "PASSWORD" placeholderTextColor = "white" style={[styles.btnBlock, styles.h4, styles.ba5]}/>
              <View style={[styles.row]}>
                <TouchableOpacity style={[styles.btnBlock, styles.bgPrimary, {padding: 12}]} onPress={() => this.props.navigation.navigate('Main')}>
                  <Text style={[styles.h4, {color: 'white'}]}>LOG IN</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Log in */}




            {/* -- Or Connect With -- */}
            <View style={[styles.row, {marginTop: 10, marginBottom: 5}]}>
              <View style={styles.line} />
              <View style={{margin: 5}}>
                <Text style={[styles.h4, styles.a5 ]}>OR CONNECT WITH</Text>
              </View>
              <View style = {styles.line} />
            </View>
            {/* -- Or Connect With -- */}

            {/* | facebook | twitter | google| */}
            <View style={styles.row}>
              <TouchableOpacity style={[styles.btn, styles.ba5, {margin: 8}]}>
                <Text style={[styles.h4, styles.bold, {color: 'white'}]}>facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.btn, styles.ba5, {margin: 8}]}>
                <Text style={[styles.h4, styles.bold, {color: 'white'}]}>twitter</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.btn, styles.ba5, {margin: 8}]}>
                <Text style={[styles.h4, {color: 'white'}]}>google</Text>
              </TouchableOpacity>
            </View>
          </View>

        </Image>
    )
  }
}
