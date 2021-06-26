import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {AppLoading} from 'expo-app-loading';
import SearchBar from './src/components/SearchBar';
import { Card } from 'react-native-paper';
import { useFonts } from 'expo-font';

const image = {
  uri:
    'http://fanthefiremagazine.com/wp-content/uploads/2014/12/ArcLight-Hollywood.jpg',
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Movieola: require('./assets/fonts/Movieola-pgwd.ttf'),
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.paragraph}>SAY IT WITH CINEMA</Text>
        <Text style={styles.paragraphTwo}>Your source for movie quotes !</Text>
        <Card>
          <SearchBar />
        </Card>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 50,
    color: '#f0ead6',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Movieola',
  }
}