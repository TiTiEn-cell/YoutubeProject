import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { AntDesign, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import Header from "../Component/Header";
import { useState } from "react";

export default function FapTV() {
  const data = [
    {
      thumbnail: require("./../image/comnguoi295.png"),
      title: "com nguoi 259",
      view: "76 tr luot xem",
      time: "4 ngay truoc",
      id: "1",
    },
    {
      thumbnail: require("./../image/comnguoi295.png"),
      title: "com nguoi 259",
      view: "76 tr luot xem",
      time: "4 ngay truoc",
      id: "2",
    },
  ];
  console.log(data)

  const [selected, setselected] = useState("video");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image
            style={styles.avatar}
            source={require("./../image/FapTVLogo.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>FAPTV</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginTop: 5 }}>@faptv</Text>
            <Text style={{ marginTop: 5, marginHorizontal: 5 }}>
              1.8 Tr người đăng ký
            </Text>
          </View>
          <Text style={{ marginTop: 5, marginHorizontal: 5 }}>1,3 N Video</Text>
        </View>
      </View>
      <Text style={{ marginTop: 5, marginHorizontal: 5 }}>
        {" "}
        Cơm Nguội - Sitcom Phim Hài Ngắn liên tục ra mắt hàng tuần sẽ giúp khán
        giả có những tiếng cười giải trí và cái nhìn
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Pressable
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
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          borderBottomColor: "#c9c9c9",
          borderBottomWidth: 1,
        }}
      >
        <Pressable
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
        </Pressable>
        <Pressable
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
        </Pressable>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.header}>
              <View style={{}}>
                <Image
                  style={{ width: 150, height: 100, resizeMode: "contain" }}
                  source={item.thumbnail}
                />
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                  {item.title}
                </Text>
               
                 
                  <Text style={{ }}>
                    {item.view}
                  </Text>
               
                <Text >
                 {item.time}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    margin: 15,
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