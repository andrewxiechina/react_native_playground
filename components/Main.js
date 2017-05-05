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
  ListView,
} from 'react-native';
import styles from './styles';
import NavExtendable from './NavExtendable'
import Footer from './Footer'
var badge1 = require('../images/badge1U.png')
var badge2 = require('../images/badge2U.png')
var badge3 = require('../images/badge3U.png')
var badge4 = require('../images/badge4U.png')
var badge5 = require('../images/badge5A.png')
var badge6 = require('../images/badge6U.png')
var badge7 = require('../images/badge7U.png')
var badge8 = require('../images/badge8U.png')

var burb = require('../images/001.png');
var alakazam = require('../images/Alakazam.png');
var mewtwo = require('../images/mewtwo.png');

var currentPokemon = [
  {
    name:"Bulbasaur",
    image: burb,
    selected: false
  },
  {
    name:'Alakazam',
    image: alakazam,
    selected: false
  },
  {
    name: "Mewtwo",
    image: mewtwo,
    selected: false
  },
];

export default class Nav extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(currentPokemon),
    };
  }

  renderPokemon(val) {
    var health = Math.floor((Math.random() * 90) + 1);
    var healthColor


    //custom health colors
    if (health < 20){
      healthColor = "#f96062"
    }else if(health > 19 && health < 40){
      healthColor = "#fbd34e"
    } else{
      healthColor = "#b7eb9b"
    }

    return (
      <TouchableOpacity>
        <View>
          <Image source ={val.image} style={{height:80, width:80, margin:10}} resizeMode ="contain" />
          <View style={[styles.row, {justifyContent: 'center'}]}>
            <Text style={[styles.h4, styles.c7]}>CP    {health}</Text>
          </View>
            <View style={{backgroundColor: "#777", flex: 1, height: 4, borderRadius: 5, borderWidth: 1, borderColor:'#c7c7c7' }}></View>
            <View style={{backgroundColor: healthColor, width: health, flex: 1, height: 4 , borderRadius: 5, bottom: 4, right: 1}}></View>
        </View>
      </TouchableOpacity>
    )
  }

  render(){
  	return(
      <View style={{flexDirection: 'column', justifyContent: "space-between"}}>
        <NavExtendable navigation={this.props.navigation} />
        <View style={[styles.row, styles.bgSecondary, ]}>
          <View style={[styles.container, {flexDirection: 'row', paddingTop: 20, paddingBottom: 20}]}>
            <Image source={require('../images/mystic.png')}  resizeMode='contain' style={[{height: 30, width: 30, margin: 10,}]} />
            <Image source={require('../images/profile.png')} resizeMode='contain' style={[{height: 180, width: 140}]} />
            <View style={[styles.row]}>
              <Text style={[styles.h4, styles.cf]}>LV</Text>
              <Text style={[styles.h2, styles.cf]}> 44</Text>
            </View>
          </View>
        </View>

        <View style={[styles.column, {justifyContent: 'space-around', padding: 15,}]}>

          <View style={[styles.row, {justifyContent: 'space-around'}]} >
              <Image source={badge1} resizeMode="contain" style={{height:30, width:30, margin:10}} />
              <Image source={badge2} resizeMode="contain" style={{height:30, width:30, margin:10}} />
              <Image source={badge3} resizeMode="contain" style={{height:30, width:30, margin:10}} />
              <Image source={badge4} resizeMode="contain" style={{height:30, width:30, margin:10}} />
              <Image source={badge5} resizeMode="contain" style={{height:30, width:30, margin:10}} />
              <Image source={badge6} resizeMode="contain" style={{height:30, width:30, margin:10}} />
              <Image source={badge7} resizeMode="contain" style={{height:30, width:30, margin:10}} />
              <Image source={badge8} resizeMode="contain" style={{height:30, width:30, margin:10}} />
          </View>

          <View style={[styles.row]}>
            <TouchableOpacity style={[styles.btnOutline, {padding: 12, margin: 15, marginTop: 0, marginBottom: 5}]} onPress={() => this.props.navigation.navigate('Main')}>
              <Text style={[styles.h3, styles.c7]}>CURRENT PARTY</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.row]}>
            <ListView dataSource={this.state.dataSource} renderRow={(rowData) => this.renderPokemon(rowData)} contentContainerStyle={[styles.row]}/>
          </View>
        </View>
        <Footer />
      </View>
  		)
  }
}
