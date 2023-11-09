import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons';
import Card from '../Component/Card';
import Header from '../Component/Header'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View>
        <Header/>
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
        flex: 1,
        backgroundColor: 'white'
    },
    underHeader:{
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
        justifyContent: 'space-around',
    },
    iconArrange:{
        borderRadius: 5,
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
  

