import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Card from '../Component/Card';


export default function HomeScreen() {   
      
    const navigation = useNavigation();
    const [videoData, setVideoData] = useState([]);
    const [selected, setselected] = useState(false);

    const disPlayNameUser = useSelector(state=>{
        return state.data.email
      })
      const loggedIn = useSelector(state=>{
        return state.loggedIn
      })
    

    const fetchDataVideo = () =>{
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=AIzaSyAkR64LHntE29CluL5A6NOjZp-pwqRZ3oo`)
        .then((res)=>res.json())
        .then((data)=>{
            setVideoData(data.items);
        })
        
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.leftHeader}
        onPress={()=>fetchDataVideo()}
        >
          <AntDesign
            style={styles.iconYoutube}
            name="youtube"
            size={32}
            color="red"
          />
          <Text style={styles.textYoutube}>YouTube</Text>
        </TouchableOpacity>

        <View style={styles.rightHeader}>
          <EvilIcons
            style={styles.iconSearch}
            name="search"
            size={32}
            color={"black"}
            onPress={() => navigation.navigate("Search")}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                if (selected === false) setselected(true);
                else if(selected===true) setselected(false)
              }}
            >
              <Image
                source={require("../image/UserIcon.png")}
                style={styles.imageUser}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {selected === true && (
        <View style={{ flex: 1, alignItems: "flex-end", marginEnd: 30,position:'absolute',zIndex:2,right:1,top:51 }}>
          <SafeAreaView style={{ width: 100, height: 100 }}>

            {loggedIn?(<View style = {{
                alignItems: "center",
                justifyContent: "center",
                width: 120,
                height: 40,
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 10,
                backgroundColor: "#f0f0f0",
                marginVertical: 10,
              }}>
               <Text>{disPlayNameUser}</Text>
            </View>):(<Pressable
            onPress={()=>{navigation.navigate("DangNhap"), setselected(false)}}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 120,
                height: 40,
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 10,
                backgroundColor: "#f0f0f0",
                marginVertical: 10,
              }}
            >
              <Text>Đăng nhập</Text>
            </Pressable>)}

            

            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 120,
                height: 40, 
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 10,
                backgroundColor: "#f0f0f0",
              }}
              onPress={()=>disPatch({type: 'log_out'})}
            >
              <Text>Đăng xuất</Text>
            </Pressable>
          </SafeAreaView>
        </View>
      )}
        

        <View style = {{
            flex: 1
        }}>
            <FlatList
            data={videoData}
            renderItem={({item})=>{
                return <Card
                videoId = {item.id.videoId}
                title = {item.snippet.title}
                channel = {item.snippet.channelTitle}
                channelId = {item.snippet.channelId} 
                thumbnails = {item.snippet.thumbnails.medium.url}                     
            />
            }}
            />
        </View>
        
    </View>    
  );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
    },
      leftHeader: {
        flexDirection: "row",
        margin: 10,
      },
      iconYoutube: {
        marginLeft: 10,
        marginRight: 5,
      },
      textYoutube: {
        fontSize: 25,
        fontWeight: "bold",
      },
      rightHeader: {
        flexDirection: "row",
        margin: 10,
      },
      imageUser: {
        width: 30,
        height: 30,
        marginLeft: 20,
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
  });
  

