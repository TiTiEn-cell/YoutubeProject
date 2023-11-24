import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,FlatList, TouchableOpacity, Pressable} from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'
import Header from '../Component/Header';
import { useSelector } from 'react-redux';


export default function ChannelSub({navigation}) {

  const Data = useSelector(state=>{return state.data.kenhDangKy})


  return (
    <View style={styles.container}>
          <View style = {
            {zIndex:1}
        }>
          <Header/>
          </View>
        <View>
          <Text style={{fontSize:20, marginTop: 20, marginBottom: 10,marginLeft: 20,}}><b>Tất cả các kênh đăng ký</b></Text>
        </View>

      <FlatList
      
      data={Data}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('infoChannel',{
          channelId: item.idChannel, 
          channelBanner:item.avartaChannel, 
          channelName:item.nameChannel, 
          customUrl: item.customUrl, 
          subCount: item.subCount, 
          videoCount: item.videoCount, 
          description: item.description
        })} 
        style={
            {
                marginHorizontal:10,
                flexDirection:'row',
                marginBottom: 20,
                marginLeft: 20,
        }
        }>
            <Image source={item.avartaChannel} 
            style={{
                width:60,
                height:60,
                borderRadius: 50,
            }}></Image>
            <View style={{justifyContent:'center'}}>
            <Text style={{fontSize:20,flexDirection:'row-reverse',marginHorizontal:15,}}>{item.nameChannel}</Text>
            </View>
            
        </TouchableOpacity>
      )}
      />
       <View style={{justifyContent:"center"}}>

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
  

