import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react';
import Card from '../Component/Card';


export default function Search({navigation}) {
    const [text, setText] = useState("");
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = ()=>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${text}&type=video&key=AIzaSyAkR64LHntE29CluL5A6NOjZp-pwqRZ3oo`)
        .then((res)=>res.json())
        .then((data)=>{
            setLoading(false)       
            setCardData(data.items)
        })
    }

  return (
    <View style = {styles.container}>
<View style={styles.header}>
        <Ionicons style = {styles.iconBack} name='arrow-back' size={32}
        onPress={()=>navigation.goBack()}
        />
        <TextInput 
        style = {styles.textInput}
        onChangeText={(text) => setText(text)}
        value={text}
        />
        <Ionicons 
        style = {styles.iconSend} 
        name='send' 
        size={30}
        onPress = {()=>fetchData()}
        />
        
        <FlatList
        data={cardData}
        renderItem={({item})=>{
            return <Card
                videoId = {item.id.videoId}
                title = {item.snippet.title}
                channel = {item.snippet.channelTitle}
                channelId = {item.snippet.channelId} 
                thumbnails = {item.snippet.thumbnails.medium.url}    
                        
            />    
        }}
        keyExtractor = {item => item.id.videoId}
        />

    </View> 
    {loading ?<ActivityIndicator size= 'large' color={'red'} style = {styles.loading}/>:null}
    </View>
    
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        marginTop: 10,
        marginBottom: 10,
    },
    iconBack:{
        marginLeft: 10,
    },
    iconSend:{
        position: 'absolute',
        
        right: 10,
    },
    textInput:{
        position: 'absolute',
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        width: '75%',
        height: 35,
        fontSize: 20,
        left: 50,
        paddingLeft: 15,
        paddingRight: 20,
    },
    loading:{
        marginTop: 10,
    }
});
