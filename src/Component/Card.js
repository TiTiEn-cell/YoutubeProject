import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'

export default function Card() {
  return (
    <View style = {styles.body}>
        <Image source={require('../image/Video1.jpg')} style = {styles.video}/>
        <View style = {styles.infoVideo}>
            <Image source={require('../image/UserIcon.png')} style = {styles.imageUser}/>
            <View>
                <Text 
                style = {styles.textTieuDeVideo}
                ellipsizeMode='tail'
                numberOfLines={2}
                >
                    Nỗi Nhớ Tựa Thiên Hà(Enzo LT) Nhạc buồn tâm trạng không lời</Text>    
                <Text style = {styles.textNameChannel}>name channel</Text>   
            </View>
            
        </View>
          
    </View>


    
    
  );
}
const styles = StyleSheet.create({
    body:{
        marginBottom: 20,
    },
    video:{
        width: '100%',
        height: 200,
        marginBottom: 5,
    },
    infoVideo:{
        flexDirection: 'row',
        marginLeft: 10,
      
    },
    imageUser:{
        width: 30,
        height: 30,
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
  

  

