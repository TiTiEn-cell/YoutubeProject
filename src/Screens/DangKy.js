import { StyleSheet, Text, View, ImageBackground,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const url = 'https://65598c87e93ca47020aa4601.mockapi.io/Users'

const DangKy = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [error, setError] = useState('')

  const handleRegister = () =>{
    if(!email.endsWith('@gmail.com')){
      setError('Email phải có đuôi @gmail.com');
    }else if(pass != confirmPass){
      setError('mật khẩu và xác nhận mật không khớp')
    }else{
      fetch('https://65598c87e93ca47020aa4601.mockapi.io/Users?email=' + email)
      .then((res)=>res.json())
      .then((data)=>{
        if(data.length > 0){
          setError('Email đã tồn tại! Vui lòng sử dụng email khác.')
        }else{
          return fetch(url,{
            method: 'POST',
            headers:{
              'Accept': "application/json",
                  "Content-type": "application/json; charset=UTF-8",
            },
            body:JSON.stringify({
              email: email,
              password: pass,
            })
          })
          .then((data) => {
            navigation.navigate('DangNhap')
          })
          .catch((error) => {
            console.error('Đăng ký không thành công!', error.message);
            // Xử lý lỗi nếu Email đã tồn tại
            // Hiển thị thông báo lỗi cho người dùng
          });
        }
      })
    }

   
  }

  return (
    <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <ImageBackground
      source={require('../image/youtube-application-logo-3d-rendering-black-background_41204-22027.jpg')}
      style = {{
        width: '100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <View style = {{ 
            borderWidth: 1,
            width: 300,
            height: 450,
            backgroundColor: 'black',
            opacity: 0.9,
            alignItems: 'center'
        }}>
            <Text style = {{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 50,
            }}>Register</Text>
            <TextInput
            placeholder='Email'
            placeholderTextColor={'grey'}
            onChangeText={(text)=>setEmail(text)}
            style = {{
                marginTop: 20,
                width: 250,
                height: 50,
                borderWidth: 1,
                borderColor: 'white',
                color: 'white',
                paddingLeft: 10,
            }}
            />
            <TextInput
            placeholder='Password'
            placeholderTextColor={'grey'}
            secureTextEntry = {true}
            onChangeText={(text)=>setPass(text)}
            style = {{
                marginTop: 30,
                width: 250,
                height: 50,
                borderWidth: 1,
                borderColor: 'white',
                color: 'white',
                paddingLeft: 10,
            }}
            />
            <TextInput
            placeholder='Confirm PassWord'
            placeholderTextColor={'grey'}
            secureTextEntry = {true}
            onChangeText={(text)=>setConfirmPass(text)}
            style = {{
                marginTop: 30,
                width: 250,
                height: 50,
                borderWidth: 1,
                borderColor: 'white',
                color: 'white',
                paddingLeft: 10,
            }}
            />

            {error !== '' && <Text style = {{
              color: 'red',
              marginTop: 10,
            }}>{error}</Text>}

            <TouchableOpacity style = {{
                width: 90,
                height: 35,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
            }}
            onPress={()=>handleRegister()}
            >
                <Text style = {{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black'
                }}>REGISTER</Text>
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
                    Have account?
                </Text>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('DangNhap')
                }}>
                    <Text style = {{
                        color: 'green'
                    }}>Sign in</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
      </ImageBackground>
    </View>
  )
}

export default DangKy
