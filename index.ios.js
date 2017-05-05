import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import Main from './components/Main';
import Pokedex from './components/Pokedex';

const Routes = {
  Main: {
    screen: Main,
  },
  Pokedex: {
    screen: Pokedex,
  },
  // Pokemons: {
  //
  // },
  // Pokemon: {
  //
  // },
  // Pokemart: {
  //
  // },
  // Items: {
  //
  // },
  // Item: {
  //
  // }
};

const AppNavigator = StackNavigator({
  ...Routes,
  Login: {
    screen: Login,
  },
}, {
  initialRouteName: 'Main',
  headerMode: 'none',
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

AppRegistry.registerComponent('react_native_playground', () => AppNavigator);
