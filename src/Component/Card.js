import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'
import { FlatList, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import VideoPlayer from '../Screens/VideoPlayer'
import History from '../Screens/History';
import { useSelector } from 'react-redux';

const url = 'https://65598c87e93ca47020aa4601.mockapi.io/VideoDaXem'

export default function Card(props) {
      const navigation = useNavigation();
      const Data = useSelector(state=>{
        return state.id
      })

      const updateVideoDaXem = async ()=>{
        const res = await fetch(`https://65598c87e93ca47020aa4601.mockapi.io/Users/${Data}`,{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
        },
        });
        const data = await res.json();
        if(!data.videoDaXem){
            data.videoDaXem = [];
        }
        data.videoDaXem.push({
            idVideo: props.videoId,
            thumbnailURL: props.thumbnails,
            titleVideo: props.title,
            channelName: props.channel
        });
        const updateRes = await fetch(`https://65598c87e93ca47020aa4601.mockapi.io/Users/${Data}`,{
            method: 'PUT',
            headers:{
                'Accept': "application/json",
                "Content-type": "application/json; charset=UTF-8",
            },
            body:JSON.stringify(data)
        })
        navigation.navigate('VideoPlayer',{
            videoId: props.videoId, 
            title: props.title,
            channelName: props.channel
        })
      }

      
  return (
    <TouchableOpacity 
    onPress = {()=>updateVideoDaXem()}
    >
<View style = {styles.body}
    
    >
        <Image source = {props.thumbnails} style = {styles.video}/>
        <View style = {styles.infoVideo}>
            <Image source= {props.channelBanner} style = {styles.imageUser}/>
            <View>
                <Text 
                style = {styles.textTieuDeVideo}
                ellipsizeMode='tail'
                numberOfLines={2}
                >
                    {props.title}</Text>    
                <Text style = {styles.textNameChannel}>{props.channel}</Text>   
            </View>
            
        </View>
          
    </View>
    </TouchableOpacity>
    


    
    
  );
}
const styles = StyleSheet.create({
    body:{
        marginBottom: 20,
        marginTop: 10,
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
  

  

