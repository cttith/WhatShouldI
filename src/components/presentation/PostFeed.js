import React from "react";
import { FlatList,Text,View,ActivityIndicator } from "react-native"
import firebase from 'react-native-firebase'
import Post  from "./Post"


class PostFeed extends React.Component{

    constructor(props){
        super(props);
        this.state = ({
            posts: [],
            loading:true,
        });
        this.unsubscribe = null;
        this.ref = firebase.firestore().collection('Posts')
    }

    // grabs docs from firestore and puts in posts array
    componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    // will check to see if anything has been added to firestore
    // RTS
    onCollectionUpdate = (querySnapshot) => {
        const posts = [];
        console.log("current user => " + this.state.us)
        querySnapshot.forEach( (doc) => {
            const { description, imageUrl, time, originalPoster } = doc.data();
            posts.push({
                key: doc.id,
                doc, //DocumentSnapShot
                description,
                imageUrl,
                time,
                originalPoster
            });
        });

        posts.forEach ( (doc) => {
            console.log("post descrip : " + doc.description)
            console.log("user that posted: " + doc.originalPoster)
        }
        );

        posts.sort(function bySessionID(a, b) {
            return a.time < b.time ? 1
            : a.time > b.time ? -1 
            : 0;
        });

        this.setState({
            posts,
            loading:false,
        })

      }

    render(){
        if(this.state.loading){
            return(
            <View style={[{flex:1,justifyContent:'center'}]}>
                <ActivityIndicator size = "large" color="#0000ff" />
            </View>
            );
        }
        return (
            <FlatList
                data={this.state.posts}
                renderItem={ ({item}) => <Post {...item} poster={item.originalPoster} /> // each {item(doc obj)} from posts array
            }
            />
        );
    }
}

export default PostFeed;