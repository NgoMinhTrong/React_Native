import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import {
  AppRegistry,
 
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


 import MainPage from './MainPage.js';
 import SplashPage from './SplashPage.js';
 import LoginPage from './LoginPage.js';
 import ForgotPassPage from './ForgotPassPage.js';
 import SignUpPage from './SignUpPage.js';


const MyApp = StackNavigator({
  SplashPage: { screen: SplashPage },
  MainPage: { screen: MainPage },
  LoginPage: { screen: LoginPage },
  ForgotPassPage: { screen: ForgotPassPage },
  SignUpPage: {screen: SignUpPage}
});
AppRegistry.registerComponent('bookClientApi', () => MyApp);