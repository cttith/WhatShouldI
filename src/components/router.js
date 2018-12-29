import React from "react";
import {Platform, StatusBar} from "react-native";
import {StackNavigator, TabNavigator, SwitchNavigator} from "react-navigation"


import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Loading from "./screens/Loading";
import Home from "./screens/Home";

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};


export const SignedOut = StackNavigator({
    SignUp:{
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
            headerStyle
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Sign In",
            headerStyle
        }
    }

});

export const SignedIn = TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: "Home"
        }
    }
);

export const createRootNavigator = (signedIn = false) => {
    return SwitchNavigator(
        {
            SignedIn:{
                screen:SignedIn,
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
}