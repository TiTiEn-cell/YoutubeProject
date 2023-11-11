import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,FlatList, TouchableOpacity} from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'
import Header from '../Component/Header';

const Arr=[
  {name:'Fap TV',img:require('../image/FapTVLogo.png'),},
  {name:'Chris',img:require('../image/ChrisLogo.png'),},
  {name:'KhoaPug',img:require('../image/KhoaPugLogo.png'),},
  {name:'MrBeast',img:require('../image/MrBeastLogo.png'),},
]

export default function ChannelSub() {
  return (
    <View style={styles.container}>
        <View style ={{
            flexDirection: 'row'
        }}>
            
        
      <FlatList
      numColumns={100}
      data={Arr}
      renderItem={({item})=>(
        <TouchableOpacity style={
            {
                marginHorizontal:15,
        }
        }>
            <Image source={item.img} 
            style={{
                width:55,
                height:55,
            }}></Image>
            <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
       <View style={{justifyContent:"center"}}>
      <Text style={{color:'blue',fontSize:20,}}>Tất cả</Text>
      </View>
      </View>

      <View>
        <View style={{justifyContent:'center'}}>
          <Image source={require('../image/Video3.png')} style={{width:'300px',height:'200px',alignContent:'center',}} />
          <Text style={{fontSize:'50'}} ><b>Thoát chết tại Thành Phố Đà Nẵng </b></Text>
        </View>
        <View style={{justifyContent:'center'}}>
          <Image source={require('../image/Video4.png')} style={{width:'300px',height:'200px',alignContent:'center',}} />
          <Text style={{fontSize:'50'}} ><b>Phân tích Game: Hollow Knight - Hiệp </b> <br/> <b>Sĩ Mặt Nạ | Game Indie - meGame</b> </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
  });
  

