import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

export default function Card(props) {
      const navigation = useNavigation();
  return (
    <TouchableOpacity 
    onPress = {()=>navigation.navigate('VideoPlayer',{
        videoId: props.videoId,
        title: props.title
    })}
    >
<View style = {styles.body}
    
    >
        <Image source = {props.thumbnails} style = {styles.video}/>
        <View style = {styles.infoVideo}>
            <Image source= {props.channelBanner} style = {styles.imageUser}/>
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
    </TouchableOpacity>
    


    
    
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
  

  

