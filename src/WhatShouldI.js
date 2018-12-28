import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'


class WhatShouldI extends Component {

    render(){
        return(
            <View>
                <Text> WhatShouldI</Text>
                <Image
                    style={{width:50, height:50}}
                     source={{
                         uri:"gs://whatshouldi-114d8.appspot.com/nfl_symbol.png"
                     }} 
                />
            </View>
        );
    }
}

export default WhatShouldI;