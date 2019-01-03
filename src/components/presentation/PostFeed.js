import React from "react";
import { FlatList,Text } from "react-native"
import firebase from 'react-native-firebase'
import Post  from "./Post"

class PostFeed extends React.Component{

    constructor(props){
        super(props);
        this.state = ({
            posts: []
        });
        this.ref = firebase.firestore().collection('Posts').get()
            .then((snapshot) => {
                snapshot.forEach( (doc) => {
                    alert(doc.id);
                });
            })
            .catch((err) => {
                alert('Error getting documents',err);
            });
    }
    _renderPost({item}){
        return <Post/>;
    }

    _returnKey(item){
        return item.toString();
    }


    render(){
        return (
            <FlatList
                data={this.state.posts}
                keyExtractor = {this._returnKey}
                renderItem = {this._renderPost}
            />
           /*  <FlatList
            data = {[1,2,3,4,5,6,7,8,9,10]}     // replace w/ firebase storage objects later
            keyExtractor= {this._returnKey}
            renderItem={ this._renderPost}
            /> */
        );
    }
}

export default PostFeed;