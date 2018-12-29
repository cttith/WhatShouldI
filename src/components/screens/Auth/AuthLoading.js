import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import firebase from 'react-native-firebase';

export default class AuthLoading extends Component {


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Home' : 'Login')
        })
    }

    render(){
        return(
            <View style={[styles.container]}>
                <ActivityIndicator size = "large" color="#0000ff" />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
    },
})