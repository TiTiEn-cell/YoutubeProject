import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'
import { WebView } from 'react-native-webview';

export default function VideoPlayer({route}) {
  const {videoId, title} = route.params
  return (
    <View style={styles.container}>
      <View style = {{
        width: '100%',
        height: 218,
      }}>
        <WebView
        source={{ uri: `https://www.youtube.com/watch?v=${videoId}` }}
      />
      </View>
      <Text style = {{
        fontSize: 20,
        width: Dimensions.get('screen').width - 50
      }}>
        {title}
      </Text>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
  });
  

