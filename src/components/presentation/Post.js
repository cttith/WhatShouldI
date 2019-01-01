import React, {Component} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Dimensions } from 'react-native'
import firebase from 'react-native-firebase'

export default class Main extends Component {
  state = { currentUser: '', screenWidth:0 }

  componentDidMount(){
    const { currentUser } = firebase.auth()
    this.setState({ currentUser,
    screenWidth: Dimensions.get("window").width  })
  }

  logout(){
    firebase.auth().signOut()
    .then(() => this.props.navigation.navigate('Login'))
  }

render() {
    const { currentUser } = this.state
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageUri = 'https://facebook.github.io/react-native/docs/assets/favicon.png'
return (
    <View style={styles.postContainer}>
        <View style={styles.userBar}>
            <Image
            style={styles.userImg}
            source={{uri:"https://cdn7.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87953/89892/Pug-Dog-Card-Party-Face-Mask-available-now-at-starstills__07594.1474580159.jpg?c=2?imbypass=on" }}
            />
            <Text style={styles.userName}>{currentUser.email} </Text>
        </View>
        <Image
        style={[styles.image,{width:this.state.screenWidth,height:imageHeight}]}
        source={{uri: imageUri}}
        />
        <Text> NEED RATING SYSTEM HERE ************* </Text>
        <Text>DESCRIPTION HERE</Text>
  </View>
    )
  }
}



const styles = StyleSheet.create({
    postContainer:{
        flex:0.45,
        width:"100%",
        backgroundColor: "rgb(255,255,100)",
        marginBottom: "3%",
    },
    userName:{
      alignSelf:'center',
      marginHorizontal:10,  
    },
    image:{
        flex:0.7,
    },
    userBar:{
        flexDirection:'row',
        flex:0.2,
        backgroundColor:"rgb(120,50,120)",
    },
    userImg:{
        borderRadius:20,
        height:40,
        width:40,
        alignSelf:'center'
    }
})
