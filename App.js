import React, {Component} from 'react';
import {StyleSheet, View, Platform, Image, Text} from 'react-native';
import { createSwitchNavigator, createStackNavigator,createAppContainer } from 'react-navigation'
//import WhatShouldI  from "./src/WhatShouldI.js";
import AuthLoading from "./src/components/screens/AuthLoading";
import SignUp from "./src/components/screens/SignUp";
import Login from "./src/components/screens/Login";
import Home from "./src/components/screens/Home";

// Flow - AUTH https://www.youtube.com/watch?v=EV1kZzt8Lrc
// root-nav 3.0 https://stackoverflow.com/questions/53367195/invariant-violation-the-navigation-prop-is-missing-for-this-navigator

const AuthStackNavigator = createStackNavigator({
//  Login:Login,
  SignUp:SignUp,
  Login:Login,
})

const rootStackNavigator = createSwitchNavigator({
 // AuthLoading: AuthLoading,
  Auth: AuthStackNavigator
})

const App = createAppContainer(rootStackNavigator)

export default App;

/*

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
*/
