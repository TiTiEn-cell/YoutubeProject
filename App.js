import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './src/Screens/Home'
import Card from './src/Component/Card'
import Search from './src/Screens/Search'

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=song&type=video&key=AIzaSyAkR64LHntE29CluL5A6NOjZp-pwqRZ3oo

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ScrollView>
      <Home/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </ScrollView> */}

      <ScrollView>
      <Search/>
      
      </ScrollView>
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
