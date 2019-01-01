import React, {Component} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from 'react-native-firebase'
import  Post  from '../presentation/Post'

export default class Main extends Component {
  state = { currentUser: null }

  componentDidMount(){
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  logout(){
    firebase.auth().signOut()
    .then(() => this.props.navigation.navigate('Login'))
  }

render() {
return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
          <Text style={styles.logo}>WhatShouldI</Text>
        </View>
        <Post />
        <Text>
          Hi 
        </Text>
        <View style={styles.signOutBtn}>
          <Button title="Sign Out"
          style={styles.signOutBtn} 
          onPress = { () => {this.logout()}}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  tempNav:{
    height:56,
    justifyContent:'space-between',
    borderBottomWidth : 1,
    alignSelf:'stretch',
  },
  logo:{
    fontWeight:'bold',
    fontSize:30,
    color:'black',
    alignSelf: 'center',
  },
  signOutBtn:{
    position:'absolute',
    bottom:0,
    width:"100%",
  },
})