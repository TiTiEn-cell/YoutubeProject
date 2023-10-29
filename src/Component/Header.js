import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons';



export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
               <View style = {styles.header}>    
            <View style = {styles.leftHeader}>
                <AntDesign style = {styles.iconYoutube} name = 'youtube' size = {32} color = 'red'/>
                <Text style = {styles.textYoutube}>YouTube</Text>
            </View>
  
            <View style = {styles.rightHeader}>
                <EvilIcons style = {styles.iconSearch} name = 'search' size={32} color={'black'}
                onPress={()=>navigation.navigate('Search')}
                />
                <Image source={require('../image/UserIcon.png')} style = {styles.imageUser}/>
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
  });
  

