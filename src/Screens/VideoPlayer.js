import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from '../Component/Comment';
import { useSelector, useDispatch } from 'react-redux';

const url = 'https://65598c87e93ca47020aa4601.mockapi.io/Users'

export default function VideoPlay({navigation,route}) {
  const {videoId, title, channelName, channelId, channelBanner} = route.params

  const [videoData, setVideoData] = useState([]);
  const [comment, setComment] = useState([])
  const [like, setLike] = useState(false);
  const [disLike, setDislike] = useState(false);
  const [sub, setSub] = useState(false)
  
  const Data = useSelector(state=>{
    return state.data.id
  })
  const loggedIn = useSelector(state=>{
    return state.loggedIn
  })
  console.log(loggedIn)
  console.log('1')

  const dispatch = useDispatch();

  const updateKenhDaDangKy = async ()=>{
    const res = await fetch(`https://65598c87e93ca47020aa4601.mockapi.io/Users/${Data}`,{
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
    },
    });
    const data = await res.json();
    if(!data.kenhDangKy){
        data.kenhDangKy = [];
    }
    data.kenhDangKy.push({
        idChannel: channelId,
        avartaChannel: channelBanner,
        nameChannel: channelName
    });
    const updateRes = await fetch(`https://65598c87e93ca47020aa4601.mockapi.io/Users/${Data}`,{
        method: 'PUT',
        headers:{
            'Accept': "application/json",
            "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify(data)
    })
  } 

  const updateDataAndFetch = async () => {
    await updateKenhDaDangKy(); // Cập nhật dữ liệu trong Redux
    const response = await fetch(url); // Yêu cầu mới để lấy dữ liệu từ API
    if (response.ok) {
      const data = await response.json();
      for (var i = 0; i < data.length; i++) {
        if (Data == data[i].id) {
          dispatch({ type: 'addData', payload: data[i] });
          dispatch({type: 'log_in'});
          console.log('run here')
        }
      }
    }
  } 



  const fetchData = ()=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=topicDetails&id=${videoId}&maxResults=10&key=AIzaSyAkR64LHntE29CluL5A6NOjZp-pwqRZ3oo`)
    .then((res)=>res.json())
    .then((data)=>{     
        setVideoData(data.items);
    })
    fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&part=id&maxResults=50&videoId=${videoId}&key=AIzaSyAkR64LHntE29CluL5A6NOjZp-pwqRZ3oo`)
    .then((res)=>res.json())
    .then((data)=>{
      setComment(data.items)
    })
}

// async function likeVideo(){
//   try {
//     const response = await axios.post(
//       `https://youtube.googleapis.com/youtube/v3/videos/rate?id=${videoId}&rating=like&key=AIzaSyAkR64LHntE29CluL5A6NOjZp-pwqRZ3oo`
//     );
//     console.log('Like successful:', response.data);
//   } catch (error) {
//     console.error('Error liking video:', error);
//   }
  
// }

  useEffect(fetchData,[]);

  const formatNumber = (number) => {
    if (number >= 1000000000) {
      return `${(number / 1000000000).toFixed(1)}T`;
    } else if (number >= 1000000) {
      return `${(number / 1000000).toFixed(1)}Tr`;
    } else if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}N`;
    } else {
      return `${number}`;
    }
  };

  const handleLike = () =>{
    setLike(!like)
    if(disLike){
      setDislike(false);
    }
  };
  const handleDislike = () =>{
    setDislike(!disLike)
    if(like){
      setLike(false);
    }
  };
  const handleSub = ()=>{
    setSub(!sub)
    
  };
  const handleShare = () =>{
    navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${videoId}`);
    alert('Copied');
  }

  return (
    
    <View style={styles.container}>
      {console.log('2')}
      <View>
        <ReactPlayer
        url = {`https://www.youtube.com/watch?v=${videoId}`}
        width= {'100%'}
        height= {218}
        controls={true}
      />
      </View>
      <View style = {{
        marginHorizontal: 10,
      }}>
      <FlatList
      data={videoData}
      renderItem={({item})=>{
        return(
        <View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Text style ={{
          fontSize: 15,
          color: 'grey',
        }}>
          
          {formatNumber(item.statistics.viewCount)} lượt xem  
        </Text>
        <Text style ={{
          fontSize: 15,
          color: 'grey',
        }}>
        {item.snippet.publishedAt}
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
        source={channelBanner}
        style = {{
          width: 30,
          height: 30,
          borderRadius: 50,
        }}
        />

        <Text 
        ellipsizeMode='tail'
        numberOfLines={1}
        style = {{
          fontSize: 18,
          marginLeft: 10,
          fontWeight: 'bold',
          width: Dimensions.get('screen').width/2
        }}>
          {channelName}
        </Text>
        </View>

        {loggedIn ? (sub?(<TouchableOpacity style = {{
          borderWidth: 1,
          borderRadius: 20,
          width: 80,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'grey'
        }}
        onPress={()=>handleSub()}
        >
        <Text style = {{
          color: 'white'
        }}>
          Hủy đăng ký
        </Text>
        </TouchableOpacity>):(<TouchableOpacity style = {{
          borderWidth: 1,
          borderRadius: 20,
          width: 75,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black'
        }}
        onPress={()=>{handleSub(),
          updateKenhDaDangKy(),
          updateDataAndFetch()
        }}
        >
        <Text style = {{
          color: 'white'
        }}>
          Đăng ký
        </Text>
        </TouchableOpacity>)): (<TouchableOpacity style = {{
          borderWidth: 1,
          borderRadius: 20,
          width: 75,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black'
        }}
        onPress={()=>navigation.navigate('DangNhap')}
        >
        <Text style = {{
          color: 'white'
        }}>
          Đăng ký
        </Text>
        </TouchableOpacity>)}
        
        

        
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
      }}     
      onPress={()=>handleLike()}
      >
          <AntDesign name= {like? "like1": "like2"} size={20} color="black"/>
          <Text style = {{
            marginLeft: 10,
          }}>
            {like? formatNumber(item.statistics.likeCount):formatNumber(item.statistics.likeCount)}
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
          }}
          onPress = {()=>handleDislike()}
          >
          <AntDesign  name={disLike?"dislike1": "dislike2"} size={20} color="black" />
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
      }}
      onPress={handleShare}
      >
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
        {formatNumber(item.statistics.commentCount)}
        </Text>
        </View>
        
      </View>

      
        </View>
          
        )
      }}
      />

      <FlatList
      data={comment}
      renderItem={({item})=>{
        return <Comment
        Avarta = {item.snippet.topLevelComment.snippet.authorProfileImageUrl}
        NameChannel = {item.snippet.topLevelComment.snippet.authorDisplayName}
        Comment = {item.snippet.topLevelComment.snippet.textOriginal}
        />
      }}
      />
      </View>
      
      

     
    </View>
    
    
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
  });
  

