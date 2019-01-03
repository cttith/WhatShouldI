import React, {Component} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, FlatList } from 'react-native'
import firebase from 'react-native-firebase'
import  Post  from '../presentation/Post'
import addPost from '../presentation/addPost'
import PostFeed from '../presentation/PostFeed'

class Home extends Component {
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
        <PostFeed/>
        <View style={{position:'absolute',bottom:0}}>
          <Button title="Add Post"
          style={styles.addPostBtn}
          onPress = { () => this.props.navigation.navigate('addPost')}
          />
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
  addPostBtn:{
    position:'absolute',
    bottom:0,
    width:"100%",
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

export default Home;