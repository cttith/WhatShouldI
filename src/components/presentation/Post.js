import React, {Component} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Dimensions } from 'react-native'
import firebase, { config } from 'react-native-firebase'

class Post extends Component {
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
        style={[{width:this.state.screenWidth,height:imageHeight}]}
        source={{uri: imageUri}}
        />
        <Text> NEED RATING SYSTEM HERE ************* </Text>
        <Text>DESCRIPTION HERE</Text>
  </View>
    )
  }
}
export default Post;



const styles = StyleSheet.create({
    postContainer:{
        flex:1,
        width:"100%",
        backgroundColor: "rgb(255,255,100)",
        marginBottom: "10%",
    },
    userName:{
      alignSelf:'center',
      marginHorizontal:10,  
    },

    userBar:{
        flexDirection:'row',
        width:"100%",
        backgroundColor:"rgb(120,50,120)",
        height: 50,
    },
    userImg:{
        borderRadius:20,
        height:40,
        width:40,
        alignSelf:'center'
    }
})
