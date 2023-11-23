import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'
import Header from '../Component/Header';

export default function FapTV() {
  return (
    <View style={styles.container}>
      <View style={{marginTop:5}}>
        <Image source={require('../image/faptv.png')} style={{width:350, height:100,borderRadius:10,}}></Image>
      </View>
      <View style={{flexDirection:''}}>
      <Image source={require('../image/FapTVLogo.png')} style={{width:60,height:60, borderRadius:10,right:75,marginTop:20}} />
        <Text style={{fontSize:30,marginHorizontal:10}}><b>FAPTV</b></Text>
        <Text style={{opacity:0.6,right:-10}}>@FapTV</Text>
        <Text style={{opacity:0.6,right:-10}}>13,8 Tr người đăng ký <Text style={{top:-5}}>. </Text>973 Video </Text>
      </View>
      <View >
        <View style={{marginHorizontal:5,}}>
          <Text style={{marginTop:5,opacity:0.6,}}>
            FAPTV được thành lập vào ngày 14/02/2014 bởi các thành
            viên: Đạo diễn Trần Đức Viễn, Rapper Thái Vũ (Black Bi), A...
          </Text>
          <TouchableOpacity>
            <Text style={{marginTop:5,}}><b>faptvmedia.com</b></Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal:10,}}>
          <TouchableOpacity>
          <Image source={require('../image/dangky.png')} style={{width:350,height:30, borderRadius:5,marginTop:10}} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity>
            <Text style={{fontSize:20,marginTop:5,fontWeight:'bold',marginHorizontal:5}}>Trang chủ </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize:20,marginTop:5,opacity:0.6,left:20,}}>Video </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,marginTop:5,opacity:0.6,left:40,}}>Shorts </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize:20,marginTop:5,opacity:0.6,left:60,}}>Sự kiện phát trực </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal:5,}}>
          <Text style={{fontSize:25,fontWeight:'bold',marginTop:5,}}>FAPtv Cơm Nguội</Text>
          <Text >Cơm Nguội - Sitcom Phim Hài Ngắn liên tục ra mắt hàng tuần
          sẽ giúp khán giả có những tiếng cười giải trí và cái nhìn </Text>
        </View>
        <View style={{marginHorizontal:5,marginTop:5,}}>
          <TouchableOpacity>
            <View style={{flexDirection:'row',}}>
              <Image source={require('../image/comnguoi295.png')} style={{width:180,height:100,borderRadius:5,}} />
              <View style={{flexDirection:'column',marginHorizontal:5}}>
                <Text style={{marginHorizontal:0,}} >FAPtv Cơm Nguội: Tập 295:Bộ Tộc Vô Tri</Text>
                <Text style={{opacity:0.5,marginTop:2,}}>FAPTV<br></br>
                997 N lượt xem . 2 ngày trước</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center',
    },
  });
  