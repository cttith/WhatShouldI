import React, {Component} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Dimensions } from 'react-native'
import firebase, { config } from 'react-native-firebase'
import { Rating } from 'react-native-elements'
import TapRating from '../container/TapRating';

class Post extends Component {
  state = { currentUser: '', screenWidth:0, imageUri: '' }

  componentDidMount(){
    const { currentUser } = firebase.auth()
    this.setState({ currentUser,
    screenWidth: Dimensions.get("window").width,
    })

  }

  logout(){
    firebase.auth().signOut()
    .then(() => this.props.navigation.navigate('Login'))
  }

render() {
    const { currentUser } = this.state
    const imageHeight = Math.floor(this.state.screenWidth * 1.05);   // aspect ratio on instagram
    const descrip = this.props.description;
    const imageUri = this.props.imageUrl
    return (
    <View style={styles.postContainer}>
        <View style={styles.userBar}>
            <Image
            style={styles.userImg}
            source={{uri:"https://cdn7.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87953/89892/Pug-Dog-Card-Party-Face-Mask-available-now-at-starstills__07594.1474580159.jpg?c=2?imbypass=on" }}
            />
            <Text style={styles.userName}>{this.props.poster} </Text>
        </View>
        <View style={[{height:imageHeight}]}>
            <Image
            style={[{width:this.state.screenWidth,height:imageHeight}]}
            source={{uri: imageUri}}
            />
        </View>
        <TapRating />
        <Text style={[{marginBottom: "10%"}]}>{descrip}</Text>
  </View>
    )
  }
}
export default Post;



const styles = StyleSheet.create({
    postContainer:{
        flex:1,
        width:"100%",
        backgroundColor: "transparent",
        marginBottom: "5%",
    },
    userName:{
      alignSelf:'center',
      marginHorizontal:10,  
    },

    userBar:{
        flexDirection:'row',
        width:"100%",
        backgroundColor:"transparent",
        height: 50,
        
    },
    userImg:{
        borderRadius:20,
        height:40,
        width:40,
        alignSelf:'center',
    },
})
