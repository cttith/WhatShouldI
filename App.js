import React, {Component} from 'react';
import {StyleSheet, View, Platform, Image, Text} from 'react-native';
import { SwitchNavigator } from 'react-navigation'
//import WhatShouldI  from "./src/WhatShouldI.js";
import Loading from "./src/components/screens/Loading";
import SignUp from "./src/components/screens/SignUp";
import Login from "./src/components/screens/Login";
import Home from "./src/components/screens/Home";


// navigation stack
/*
const App = SwitchNavigator(
  {
    Loading:Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App

*/

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
