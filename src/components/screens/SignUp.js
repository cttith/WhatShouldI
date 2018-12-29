import React, {Component} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default class SignUp extends Component {
    state = { email: '', password: '', errorMessage: null}


    handleSignUp = () => {
        // TODO: Firebase stuff..
        console.log('handleSignUp')
    }

    render(){
        return(
            <View style={{backgroundColor:"rgb(255,255,255)",flexDirection:'column'}}>
                <View style={styles.textContainer}>
                        <Text style={[styles.textColor,{paddingHorizontal:50,paddingTop:25}]} > Sign up to find </Text>
                        <Text style={[styles.textColor,{paddingHorizontal:25}]} > suggestions of what </Text>
                        <Text style={[styles.textColor,{paddingHorizontal:40}]} > to do from others </Text>
                        <Text style={[styles.textColor,{paddingLeft:60}]}>  in your area. </Text>
                    {this.state.errorMessage &&
                        <Text style={{ color: 'red' }}>
                            {this.state.errorMessage}
                        </Text>}
                </View>
                <View style={{height:80}}>
                    <Text style={{fontSize:35,textAlign:'center',backgroundColor:"rgb(255,255,255)"}}> WhatShouldI </Text>
                </View>
                <View style={styles.signUpContainer}>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder="Password"
                        autoCapitalize="none"
                        style={[styles.textInput]}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                    />
                    <View style={styles.buttonContainer}>
                        <Button style={paddingTop=5} title="Sign up" 
                        onPress={this.handleSignUp.then(() => navigation.navigate('SignedIn'))} />
                    </View>
                    <View style={styles.buttonContainer}>    
                        <Button title="Already have an account? Login"
                        onPress={ () => this.props.navigation.navigate('Login')} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textContainer: {
        flex:0.65,
        backgroundColor:"rgb(255,255,255)",
    },

    buttonContainer:{
        margin:10
    },

    signUpContainer: {
        flex:1,
        alignItems:'center',
        backgroundColor: "rgb(255,255,255)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: 1,
    },

    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
    },

    textColor:{
        marginTop: 10,
        color: "rgb(155,155,155)",
        fontSize: 25,
    },
    
    signUpText: {
        flex:1,
        textAlign:'center',
        margin:25,
    }

}
)