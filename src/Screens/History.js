import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5, MaterialIcons} from '@expo/vector-icons'
import Header from '../Component/Header';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const url = 'https://65598c87e93ca47020aa4601.mockapi.io/Users'

export default function History({navigation}) {

  const dispatch = useDispatch()
  const data = useSelector(state=>{
    return state.videoDaXem
  })

//   const fetchData = () =>{
//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//       setHistoryData(data)
//     })
//   }

// useEffect(fetchData,[])


  return (
    <View style={styles.container}>
        <View>
          <Header/>
        </View>
        <View style = {{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
        }}>
          <MaterialIcons name='history' size={50}/>
          <Text style = {{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
          }}>Video đã xem</Text>
        </View>

          <FlatList
          data={data}
          renderItem={({item})=>{
            return(
              <TouchableOpacity onPress = {()=> navigation.navigate('VideoPlayer',{
                videoId: item.idVideo, 
                title: item.titleVideo,
                channelName: item.channelName
            })}>
          <View style = {{
              marginBottom: 20,
              marginTop: 10,
          }}
              
              >
                  <Image source = {item.thumbnailURL} style = {styles.video}/>
                  <View style = {styles.infoVideo}>
                      <Image source={item.channelBanner} style = {styles.imageUser}/>
                      <View>
                          <Text 
                          style = {styles.textTieuDeVideo}
                          ellipsizeMode='tail'
                          numberOfLines={2}
                          >
                              {item.titleVideo}</Text>    
                              <View>
                              <Text style = {styles.textNameChannel}>{item.channelName}</Text>
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
      width: Dimensions.get('window').width - 60
  },
  textNameChannel:{
      fontSize: 13,
      color: 'grey',
  }
  });
  

