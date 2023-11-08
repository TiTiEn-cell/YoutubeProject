import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {AntDesign, EvilIcons, FontAwesome5} from '@expo/vector-icons'
import ReactPlayer from 'react-player';

export default function VideoPlay({route}) {
  const {videoId, title} = route.params
  return (
    <View style={styles.container}>
      <View style = {{
       
      }}>
        <ReactPlayer
        url = {`https://www.youtube.com/watch?v=${videoId}`}
        width= {'100%'}
        height= {218}
        controls={true}
      />
      </View>
      <View style ={{
        marginHorizontal: 10,
      }}>
      <Text
        ellipsizeMode='tail'
        numberOfLines={2}
      style = {{
        fontSize: 20,
        width: Dimensions.get('screen').width - 50
      }}>
        {title}
      </Text>
      </View>
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
  });
  

