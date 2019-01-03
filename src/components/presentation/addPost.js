import React from 'react'
import {TextInput, Image, View, StyleSheet, Button} from 'react-native'
import firebase from 'react-native-firebase'


export default class addPost extends React.Component{
    //state = { description: '', imageURL: ''}

    constructor() {
        super();
        this.ref = firebase.firestore().collection('Posts');
        this.state = {
            description: '',
            imageUrl: ''
        };
    }

    addNewPost(){
        this.ref.add({
            description: this.state.description,
            imageUrl: this.state.imageUrl
        });

        this.setState({
            description: '',
            imageUrl: ''
        })
        this.props.navigation.navigate('Home')
    }

    render(){
        return(
            <View style={{flex:1}}>
                <TextInput
                    placeholder="Enter your description here"
                    autoCapitalize="none"
                    style={styles.TextInput}
                    onChangeText={description => this.setState({description})}
                    value={this.state.description}
                />
                <TextInput
                    placeholder="Enter image URL"
                    autoCapitalize="none"
                    style={styles.TextInput}
                    onChangeText={imageUrl => this.setState({imageUrl})}
                    value={this.state.imageUrl}
                />
                <Button 
                    title = "Add Post"
                    onPress= { () => this.addNewPost()}
                />
                <Button
                    title = "Return to feed"
                    onPress = { () => this.props.navigation.navigate('Home') }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TextInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
    },
})


