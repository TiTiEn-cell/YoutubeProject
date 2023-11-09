import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'
import Header from '../Component/Header';

export default function ChannelSub() {
  return (
    <View style={styles.container}>
        <View>
          <Header/>
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
  

