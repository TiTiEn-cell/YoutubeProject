import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons';
import Header from '../Component/Header'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {    
    const navigation = useNavigation();
    const [videoData, setVideoData] = useState([]);
    const fetchDataVideo = () =>{
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=`)
        .then((res)=>res.json())
        .then((data)=>{
            setVideoData(data.items);
        })
    }

    useEffect(fetchDataVideo,[]);

  return (
    <View style={styles.container}>
        <View>
        <Header/>
        </View>
        
        <View style = {styles.underHeader}>
                <FontAwesome5 name = 'compass' size = {28} style = {styles.iconArrange}/>
                <Text style = {styles.textArrangeAll}>Tất cả</Text>
                <Text style = {styles.textArrangeMusic}>Âm nhạc</Text>
                {<Text style = {styles.textArrangeGame}>Trò chơi</Text>}
            </View> 


            <FlatList
            data = {videoData}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity 
    onPress = {()=> navigation.navigate('VideoPlayer',{
        videoId: item.id.videoId, 
        title: item.snippet.title,
        channelName: item.snippet.channelTitle
    })}
    >
<View style = {{
    marginBottom: 20,
    marginTop: 10,
}}
    
    >
        <Image source = {item.snippet.thumbnails.medium.url} style = {styles.video}/>
        <View style = {styles.infoVideo}>
            <Image  style = {styles.imageUser}/>
            <View>
                <Text 
                style = {styles.textTieuDeVideo}
                ellipsizeMode='tail'
                numberOfLines={2}
                >
                    {item.snippet.title}</Text>    
                    <View>
                    <Text style = {styles.textNameChannel}>{item.snippet.channelTitle}</Text>
                    </View>
                   
            </View>
            
        </View>
          
    </View>
    </TouchableOpacity>
                )
            }}
            />
        
    </View>    
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    underHeader:{
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
        justifyContent: 'space-around',
    },
    iconArrange:{
        borderRadius: 5,
        textAlign: 'center',
        lineHeight: 40,
        width: 40,
        height: 40,
        backgroundColor: '#D9D9D9',
        
    },
    textArrangeAll:{
        textAlign: 'center',
        lineHeight: 40,
        width: 80,
        height: 40,
        fontSize: 20,      
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
    },
    textArrangeMusic:{
        textAlign: 'center',
        lineHeight: 40,
        width: 100,
        height: 40,
        fontSize: 20,      
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
    },
    textArrangeGame:{
        textAlign: 'center',
        lineHeight: 40,
        width: 100,
        height: 40,
        fontSize: 20,      
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
    },
    video:{
        
        width: '100%',
        height: 218,
        marginBottom: 5,
    },
    infoVideo:{
        flexDirection: 'row',
        marginLeft: 10,
      
    },
    imageUser:{
        borderRadius: 100,
        width: 40,
        height: 40,
        marginRight: 10,
        marginTop: 5,
    },
    textTieuDeVideo:{
        fontSize: 18,
        width: Dimensions.get('window').width - 50
    },
    textNameChannel:{
        fontSize: 13,
        color: 'grey',
    }
  });
  

