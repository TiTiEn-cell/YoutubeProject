import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style = {styles.header}>    
            <View style = {styles.leftHeader}>
                <AntDesign style = {styles.iconYoutube} name = 'youtube' size = {32} color = 'red'/>
                <Text style = {styles.textYoutube}>YouTube</Text>
            </View>
  
            <View style = {styles.rightHeader}>
                <EvilIcons style = {styles.iconSearch} name = 'search' size={32} color={'black'}/>
                <Image source={require('../image/UserIcon.png')} style = {styles.imageUser}/>
            </View>

             
      </View>
      <View style = {styles.underHeader}>
                <FontAwesome5 name = 'compass' size = {28} style = {styles.iconArrange}/>
                <Text style = {styles.textArrangeAll}>Tất cả</Text>
                <Text style = {styles.textArrangeMusic}>Âm nhạc</Text>
                <Text style = {styles.textArrangeGame}>Trò chơi</Text>
            </View> 
        

    </View>
    
    
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header: {
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    leftHeader:{
        flexDirection: 'row',
        margin: 10,
    },
    iconYoutube:{
        marginLeft: 10,
        marginRight: 5,
    },
    textYoutube:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    rightHeader:{
        flexDirection: 'row',
        margin: 10,
    },
    imageUser:{
        width: 30,
        height: 30,
        marginLeft: 20,
    },
    underHeader:{
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
        justifyContent: 'space-around',
    },
    iconArrange:{
        textAlign: 'center',
        lineHeight: 40,
        width: 40,
        height: 40,
        backgroundColor: '#D9D9D9',
        
    },
    textArrangeAll:{
        textAlign: 'center',
        lineHeight: 40,
        width: 80,
        height: 40,
        fontSize: 20,      
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
    },
    textArrangeMusic:{
        textAlign: 'center',
        lineHeight: 40,
        width: 100,
        height: 40,
        fontSize: 20,      
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
    },
    textArrangeGame:{
        textAlign: 'center',
        lineHeight: 40,
        width: 100,
        height: 40,
        fontSize: 20,      
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
    }
  });
  

