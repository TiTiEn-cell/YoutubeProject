import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'
import ReactPlayer from 'react-player';
import { TouchableOpacity } from 'react-native-web';

export default function VideoPlay({route}) {
  const {videoId, title, channelName} = route.params
  return (
    <View style={styles.container}>
      <View>
        <ReactPlayer
        url = {`https://www.youtube.com/watch?v=${videoId}`}
        width= {'100%'}
        height= {218}
        controls={true}
      />
      </View>

      <View style = {{
        marginTop: 18,
      }}>
      <Text
        ellipsizeMode='tail'
        numberOfLines={2}
      style = {{
        fontSize: 20,
        fontWeight: 'bold',
        width: Dimensions.get('screen').width - 50
      }}>
        {title}
      </Text>
      </View>
      
      <View style = {{
        marginTop: 5,
      }}>
        <Text style ={{
          fontSize: 15,
          color: 'grey',
        }}>
          lượt xem  Time
        </Text>
        <Text>

        </Text>
      </View>

      <View style = {{
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <View style = {{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
        source={require('../image/UserIcon.png')}
        style = {{
          width: 30,
          height: 30,
        }}
        />

        <Text style = {{
          fontSize: 18,
          marginLeft: 10,
          fontWeight: 'bold',
        }}>
          {channelName}
        </Text>
        </View>
        
        <TouchableOpacity style = {{
          borderWidth: 1,
          borderRadius: 20,
          width: 75,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black'
        }}>
        <Text style = {{
          color: 'white'
        }}>
          Đăng ký
        </Text>
        </TouchableOpacity>

        
      </View>

      <View style = {{
        marginTop: 18,
        flexDirection: 'row',
      }}>
        <View style = {{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 140,
          height: 30,
          borderRadius: 20,
          backgroundColor: '#D9D9D9',

        }}>
          <TouchableOpacity  style = {{
          flexDirection: 'row',
          width: 80,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          height: 30,
          borderRightWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
      }}>
          <AntDesign name="like2" size={20} color="black" />
          <Text style = {{
            marginLeft: 10,
          }}>
            27N
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {{
            justifyContent: 'center',
            alignItems: 'center',
            borderLeftWidth: 1,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            width: 60,
            height: 30,
          }}>
          <AntDesign  name="dislike2" size={20} color="black" />
          </TouchableOpacity>
        </View>


          <TouchableOpacity  style = {{
          marginLeft: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 90,
          height: 30,
          borderRadius: 20,
          backgroundColor: '#D9D9D9',
      }}>
          <MaterialCommunityIcons name="share-outline" size={28} color="black" />          
          <Text>
            Chia sẻ
          </Text>
          </TouchableOpacity>

      </View>

      <View style = {{
        marginTop: 18,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        width: '100%',
        height: 80,
      }}>
        <View style = {{
          flexDirection: 'row',
        }}>
        <Text style = {{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 10,
          marginLeft: 10,
        }}>
          Bình luận
        </Text>

        <Text  style = {{
          fontSize: 15,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Số lượng bình luận
        </Text>
        </View>
        
      </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 10,
    },
  });
  

