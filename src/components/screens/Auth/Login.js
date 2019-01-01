import React, {Component} from 'react'
import { StyleSheet, Text, TextInput, View, Button} from 'react-native'
import firebase from 'react-native-firebase'



export default class Login extends Component {
    state = {email: '', password: '', errorMessage:null}

    handleLogin = () =>{
        const { email, password } = this.state
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({errorMessage: error.message}))
    }

    render(){
        return(
            <View style={styles.signInContainer}>
                <Text style={styles.logo}>WhatShouldI</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText ={email => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.TextInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText = {password => this.setState({password})}
                    value={this.state.password}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Login" 
                    onPress ={this.handleLogin}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Don't have an account? Sign up"
                    onPress = {() => this.props.navigation.navigate('SignUp')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"rgb(100,100,100)"
    },
    TextInput:{
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
    },
    buttonContainer:{
        margin:10
    },
    signInContainer: {
        backgroundColor:"rgb(255,255,255)",
        alignItems:'center',
        borderWidth: 1,
        borderColor: "rgb(233,233,233)",
        width:"90%",
        margin:20
    },
    logo:{
        fontWeight:'bold',
        fontSize:30,
        color:'black',
        margin:10
    }
})