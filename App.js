import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './src/Screens/Home'
import Card from './src/Component/Card'
import Search from './src/Screens/Search'

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
      <Search/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
