import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'

export default function Card(props) {
  return (
    <View style = {styles.body}>
        <Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} style = {styles.video}/>
        <View style = {styles.infoVideo}>
            <Image source={{uri:`https://yt3.ggpht.com/ytc/APkrFKYk1Qx7U6NBA1eyucSFp-HP5iT45SBa6JO-KifR3Q=s88-c-k-c0x00ffffff-no-rj`}} style = {styles.imageUser}/>
            <View>
                <Text 
                style = {styles.textTieuDeVideo}
                ellipsizeMode='tail'
                numberOfLines={2}
                >
                    {props.title}</Text>    
                <Text style = {styles.textNameChannel}>{props.channel}</Text>   
            </View>
            
        </View>
          
    </View>


    
    
  );
}
const styles = StyleSheet.create({
    body:{
        marginBottom: 20,
        marginTop: 10,
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
        width: Dimensions.get('screen').width - 50
    },
    textNameChannel:{
        fontSize: 13,
        color: 'grey',
    }
  });
  

  

