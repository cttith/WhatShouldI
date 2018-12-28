import React from 'react'
import {StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default class SignUp extends React.Component {
    state = { email: '', password: '', errorMessage: null}


    handleSignUp = () => {
        // TODO: Firebase stuff..
        console.log('handleSignUp')
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textColor} > Sign up to find suggestions of what to do from people in your area. </Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
            </View>

        );
    }
}





const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },

    textColor:{
        marginTop: 10,
        padding: 
        color: "rgb(155,155,155)",
        fontSize: 30,
    }

}
)