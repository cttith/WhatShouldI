import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

export default class Loading extends Component {
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

    horizontal : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    }
})