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
  Icon,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
        <Image source={require("../images/background.jpg")} style={{flex: 1, justifyContent: 'space-between', alignItems: 'center' }} resizeMode="stretch" >

          <Image source={require("../images/logo.png")} style={{width: 220,}} resizeMode="contain"/>

          <View style={{width:310, height:250, margin:10, borderColor:'#d3d3d3'}}>
            {/* Log in */}
            <Text style={{alignSelf:'flex-end', fontSize:13, margin:5, color:'#333', fontStyle:'italic', fontWeight:'200', backgroundColor:'rgba(0,0,0,0)'}}>REGISTER</Text>
            <TextInput placeholder = "USERNAME" placeholderTextColor = "#fff" style = {styles.textInput}/>
            <TextInput placeholder = "PASSWORD" placeholderTextColor = "#fff" style = {styles.textInput}/>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main') } style={{backgroundColor:'rgba(226,39,44, 0.5)', flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text style={{color:'#fff', fontSize:12, fontWeight:'700'}}>LOG IN</Text>
            </TouchableOpacity>
            {/* Log in */}

            {/* -- Or Connect With -- */}
            <View style={styles.row}>
              <View style={styles.line} />
              <View style={{flex:1, margin:5}}><Text style={{fontSize:10, fontWeight:'600', color:'#444', backgroundColor:'rgba(0,0,0,0)'}}>OR CONNECT WITH</Text></View>
              <View style = {styles.line} />
            </View>
            {/* -- Or Connect With -- */}

            {/* | facebook | twitter | google| */}
            <View style={styles.row}>
              <TouchableOpacity style = {styles.social} >
                <Text style={{color:'#fff', fontSize:11, fontWeight:'600'}}>facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.social} >
                <Text style={{color:'#fff', fontSize:11, fontWeight:'600'}}>twitter</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.social} >
                <Text style={{color:'#fff', fontSize:11, fontWeight:'600'}}>google</Text>
              </TouchableOpacity>
            </View>
          </View>

        </Image>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {flex:1, backgroundColor:'#rgba(0,0,0,0.3)', padding:10, color:'#fff', fontSize:12},
  line:{flex:1, height:2, backgroundColor:'rgba(0,0,0,0.2)' },
  row:{flex:1, flexDirection:'row', alignItems:'center'},
  social:{flex:1, borderRadius:2, backgroundColor:'#rgba(0,0,0,0.6)', flexDirection:'row', margin:8, alignItems:'center', justifyContent:'center', padding:5}

});
