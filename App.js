import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screens/Home'
import Search from './src/Screens/Search'
import ChannelSub from './src/Screens/ChannelSub'
import History from './src/Screens/History';
import VideoPlayer from './src/Screens/VideoPlayer';

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=song&type=video&key=AIzaSyAkR64LHntE29CluL5A6NOjZp-pwqRZ3oo
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const mainHome =()=>{
  return(
<Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({color}) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'home';
      } else if (route.name === 'Channel Sub') {
        iconName = 'subscriptions';
      }else if (route.name === 'History') {
        iconName = 'history';
      }

      // You can return any component that you like here!
      return <MaterialIcons name={iconName} size={32} color={color} />;
    },
    tabBarActiveTintColor: 'red',
    tabBarInactiveTintColor: 'gray',
  })}
>
    <Tabs.Screen name='Home' component={Home} options={{ headerShown: false }}/>
    <Tabs.Screen name='Channel Sub' component={ChannelSub} options={{ headerShown: false }}/>
    <Tabs.Screen name='History' component={History} options={{ headerShown: false }}/>
  </Tabs.Navigator>
  )
  
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='MainHome' component={mainHome} options={{ headerShown: false }}/>
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name='VideoPlayer' component={VideoPlayer} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
