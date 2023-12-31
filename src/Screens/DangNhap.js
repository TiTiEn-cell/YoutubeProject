import { StyleSheet, Text, View, ImageBackground,TextInput,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

const url = 'https://65598c87e93ca47020aa4601.mockapi.io/Users'

const DangNhap = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const handleLogin = () =>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            for(var i = 0; i<data.length; i++){
                if(email == data[i].email && pass == data[i].password){
                    dispatch({type:'addData', payload: data[i]})
                    dispatch({type: 'log_in'})
                    navigation.goBack()

                }else{
                    setError('Email hoặc mật khẩu không chính xác!!')
                }
            }
        })
    }

  return (
    <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <ImageBackground
      source={require('../image/backgroundYoutube1.jpg')}
      resizeMode='stretch'
      style = {{
        width: '100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        
        <View style = {{
            position: 'absolute',
            width: '100%',
            height:'100%',
            backgroundColor: 'black',
            opacity: 0.5,
        }}>
            <TouchableOpacity style = {{
            position: 'absolute',top: 10, left: 10,
        }}
        onPress={()=>navigation.goBack()}
        >
        <Ionicons name='arrow-back' size={32} color={'white'}/>
        </TouchableOpacity>
        </View>
        <View style = {{
            borderWidth: 1,
            width: 300,
            height: 400,
            backgroundColor: 'black',
            opacity: 0.8,
            alignItems: 'center'
        }}>
            <Text style = {{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 50,
            }}>Login now</Text>
            <TextInput
            placeholder='Email'
            placeholderTextColor={'grey'}
            style = {{
                marginTop: 20,
                width: 250,
                height: 50,
                borderWidth: 1,
                borderColor: 'white',
                color: 'white',
                paddingLeft: 10,
            }}
            onChangeText={(text)=>setEmail(text)}
            />
            <TextInput
            placeholder='Password'
            placeholderTextColor={'grey'}
            secureTextEntry = {true}
            style = {{
                marginTop: 30,
                width: 250,
                height: 50,
                borderWidth: 1,
                borderColor: 'white',
                color: 'white',
                paddingLeft: 10,
            }}
            onChangeText={(text)=>setPass(text)}
            />
            <View style = {{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            {error !== '' && <Text style = {{
              color: 'red',
              marginTop: 10,
            }}>{error}</Text>}
            </View>
            
            <TouchableOpacity style = {{
                width: 90,
                height: 35,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
            }}
            onPress={()=>{handleLogin()}}
            >
                <Text style = {{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                }}>LOGIN</Text>
            </TouchableOpacity>
            
            <View style = {{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 1,
                flexDirection: 'row'
                
            }}>
            <Text style = {{
                color: 'white'
            }}>
                    New user?
                </Text>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('DangKy')
                }}>
                    <Text style = {{
                        color: 'green'
                    }}>Register here</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
      </ImageBackground>
    </View>
  )
}

export default DangNhap
