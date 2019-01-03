import React from 'react'
import {TextInput, Image, View, StyleSheet, Button} from 'react-native'


export default class addPost extends React.Component{
    state = { description: ''}

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
                <Button 
                    title = "Add Post"
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


