import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'
import Header from '../Component/Header';

export default function FapTV() {
  return (
    <View style={styles.container}>
        <View>
          <Header/>
          <View>
            <Image style={{width:400,height:600,}} source={require('../image/faptv.png')}/>
          <Image source={require('../image/FapTVLogo.png')} style={{}}></Image>
          <Text style={{fontSize:30, }}><b>FAPTV</b></Text>
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
  