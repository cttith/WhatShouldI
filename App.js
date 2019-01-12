import React, {Component} from 'react';
import {StyleSheet, View, Platform, Image, Text} from 'react-native';
import { createSwitchNavigator, createStackNavigator,createAppContainer } from 'react-navigation'
//import WhatShouldI  from "./src/WhatShouldI.js";
import AuthLoading from "./src/components/screens/Auth/AuthLoading";
import SignUp from "./src/components/screens/Auth/SignUp";
import Login from "./src/components/screens/Auth/Login";
import Home from "./src/components/screens/Home";
import Post from "./src/components/presentation/Post";
import addPost from "./src/components/presentation/addPost";

// Flow - AUTH https://www.youtube.com/watch?v=EV1kZzt8Lrc
// root-nav 3.0 https://stackoverflow.com/questions/53367195/invariant-violation-the-navigation-prop-is-missing-for-this-navigator


const AuthStackNavigator = createStackNavigator({
  Login:Login,
  SignUp:SignUp,
})

const rootStackNavigator = createSwitchNavigator({
  AuthLoading: AuthLoading,
  Auth: AuthStackNavigator,
  Home: Home,addPost
})

const App = createAppContainer(rootStackNavigator)

export default App;

