import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";
import { useEffect, useState } from "react";

export default function infoChannel({navigation,route}) {
  const {channelId, channelBanner, channelName, customUrl, subCount, videoCount, description} = route.params

  const [selected, setselected] = useState("video");
  const [video, setVideo] = useState([]);

  const fetchData = () =>{
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&videoDefinition=high&videoDuration=long&key=AIzaSyDtlgOUocDV93ajAvmn_LXIYSpxQb7h2lw`)
    .then((res)=>res.json())
    .then((data)=>{
      setVideo(data.items)
    })
  }

  useEffect(fetchData,[])
  
  return (
    <View style={styles.container}>
      <ScrollView>

    
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image
            style={styles.avatar}
            source={channelBanner}
          />
        </View>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{channelName}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginTop: 5 }}>{customUrl}</Text>
            <Text style={{ marginTop: 5, marginHorizontal: 5 }}>
             {subCount} người đăng ký
            </Text>
          </View>
          <Text style={{ marginTop: 5, marginHorizontal: 5 }}>{videoCount} Video</Text>
        </View>
      </View>
      <Text style={{ marginTop: 5, marginHorizontal: 5, fontSize: 18 }}>
        {" "}
        {description}
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 40,
            backgroundColor: "black",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          borderBottomColor: "#c9c9c9",
          borderBottomWidth: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => setselected("video")}
          style={
            selected === "video"
              ? { borderBottomColor: "black", borderBottomWidth: 1 }
              : null
          }
        >
          <Text
            style={{
              ...styles.title,
              fontWeight: selected === "video" ? "bold" : 400,
            }}
          >
            Video
          </Text>
        </TouchableOpacity>
        {/* <Pressable
          onPress={() => setselected("short")}
          style={
            selected === "short"
? { borderBottomColor: "black", borderBottomWidth: 1 }
              : null
          }
        >
          <Text
            style={{
              ...styles.title,
              fontWeight: selected === "short" ? "bold" : 400,
            }}
          >
            Short
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setselected("timkiem")}
          style={
            selected === "timkiem"
              ? { borderBottomColor: "black", borderBottomWidth: 1 }
              : null
          }
        >
          <Text
            style={{
              ...styles.title,
              fontWeight: selected === "timkiem" ? "bold" : 400,
            }}
          >
            Tim Kiem
          </Text>
        </Pressable> */}
      </View>
      <FlatList
        data={video}
        //keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>

                <Image
                  style={{ width: '100%', height: 218, marginTop: 10, }}
                  source={item.snippet.thumbnails.medium.url}
                />

              <View style={{ marginHorizontal: 15, marginBottom: 15, }}>
                <Text style={{ fontSize: 18,  width: Dimensions.get('window').width - 40}} 
                ellipsizeMode="tail"
                numberOfLines={2}
                >
                  {item.snippet.title}
                </Text>
               
                 
                  {/* <Text style={{ }}>
                    {item.view}
                  </Text> */}
               
                <Text style = {{
                  fontSize:15, color:'grey'
                }}>
                 {item.snippet.publishTime}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header:{
    flexDirection: 'row'
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 180,
    marginEnd: "15px",
  },
  title: {
    fontSize: 15,

    marginHorizontal: 15,
  },
});