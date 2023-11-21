import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,FlatList, TouchableOpacity, Pressable} from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'
import Header from '../Component/Header';
import { FapTVsub } from './FapTV';

const Arr=[
 {name:'Fap TV',img:require('../image/FapTVLogo.png'),},
  {name:'Chris',img:require('../image/ChrisLogo.png'),},
  {name:'KhoaPug',img:require('../image/KhoaPugLogo.png'),},
  {name:'MrBeast',img:require('../image/MrBeastLogo.png'),},
]

export default function ChannelSub({navigation}) {
  return (
    <View style={styles.container}>
        <View style ={{
            flexDirection: '',
            
        }}>
          <View>
          <Header/>
          </View>
        <View>
          <Text style={{fontSize:20, marginHorizontal:10,}}><b>Tất cả các kênh đăng ký</b></Text>
        </View>
      <FlatList
      
      data={Arr}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>{navigation.navigate('FapTVsub')}} 
        style={
            {
                marginHorizontal:10,
                flexDirection:'row',
                marginBottom: 20,
        }
        }>
            <Image source={item.img} 
            style={{
                width:60,
                height:60,

            }}></Image>
            <View style={{justifyContent:'center'}}>
            <Text style={{fontSize:20,flexDirection:'row-reverse',marginHorizontal:15,}}>{item.name}</Text>
            </View>
            
        </TouchableOpacity>
      )}
      />
       <View style={{justifyContent:"center"}}>

      </View>
      </View>
      <View>
        <Pressable onPress={() => {
          navigation.navigate('FapTV')
        }} >

        </Pressable>
      </View>
     

    </View>
  );
}
/*
 <View>
        <Pressable onPress={()=>{navigation.navigate('FapTV')}}>
          <TouchableOpacity>
          <View>
          <Image style={{width:60, height:60,marginHorizontal:15,}} source={require('../image/FapTVLogo.png')} />
          <Text>Fap TV</Text>
          </View>
          </TouchableOpacity>
          
        </Pressable>
      </View>
*/
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',

    },
  });
  

