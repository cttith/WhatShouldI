import React from 'react'
import {TextInput, Image, View, StyleSheet, Button} from 'react-native'
import firebase from 'react-native-firebase'
import ImagePicker from 'react-native-image-picker'

export default class addPost extends React.Component{
    //state = { description: '', imageURL: ''}

    constructor() {
        super();
        const { currentUser } = firebase.auth()
        this.ref = firebase.firestore().collection('Posts');
        this.state = {
            description: '',
            imageUrl: '',
            photo: null,
            time: null,
            user: currentUser.email
        };
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if(response.uri){
                this.setState({photo: response})
            }
        })
    }


     uploadImage = (uri, mime = 'application/octet-stream') => {
        return new Promise((resolve, reject) => {
            const uploadUri = uri
            const sessionId = new Date().getTime()
            let uploadBlob = null
            const imageRef = firebase.storage().ref().child(uri);
            console.log("uri = " + uri);
            console.log("imageRef = " + imageRef.toString())
            imageRef.putFile(uri, { contentType: mime})
            .then( () => {
                imageRef.getDownloadURL().then( (url) => {
                    this.ref.add({
                        description: this.state.description,
                        imageUrl : url,
                        time: sessionId,
                        originalPoster: this.state.user
                    })
                })
                
            })
        })
      } 

    addNewPost(){
        this.uploadImage(this.state.photo.uri)
        this.setState({
            description: '',
            imageUrl: '',
            time: null,
        })
        this.props.navigation.navigate('Home')
    }

    render(){
        const { photo } = this.state
        return(
            <View style={{flex:1,alignContent:'center'}}>
                {photo && (
                    <Image  
                        source={{ uri: photo.uri }}
                        style={{alignSelf:'center', width:300, height:300 }}
                    />
                )}
                <TextInput
                    placeholder="Enter your description here"
                    autoCapitalize="none"
                    style={styles.TextInput}
                    onChangeText={description => this.setState({description})}
                    value={this.state.description}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title = "Import photo from library"
                        style={styles.button}
                        onPress = { () => this.handleChoosePhoto()}
                    />
                    <Button 
                        title = "Add Post"
                        style={styles.button}
                        onPress= { () => this.addNewPost()}
                    />
                    <Button
                        title = "Return to feed"
                        onPress = { () => this.props.navigation.navigate('Home') }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TextInput: {
        alignSelf:'center',
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
    }, 
    buttonContainer:{
        width:'70%',
        marginTop:10,
        alignSelf:'center'
    },
    button:{
        color:'red'
    }
})


