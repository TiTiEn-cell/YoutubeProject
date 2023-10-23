import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react';


export default function App() {
    const [text, setText] = useState("");
  return (
    <View style={styles.header}>
        <Ionicons style = {styles.iconBack} name='arrow-back' size={32}/>
        <TextInput 
        style = {styles.textInput}
        onChangeText={(text) => setText(text)}
        value={text}
        />
        <Ionicons style = {styles.iconSend} name='send' size={30}/>
    </View> 
  );
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconBack:{
        marginLeft: 10,
    },
    iconSend:{
        marginRight: 10,
    },
    textInput:{
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        width: 280,
        fontSize: 20,
        paddingLeft: 15,
        paddingRight: 20,
    }
});
