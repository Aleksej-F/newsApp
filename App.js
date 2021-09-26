import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { gStyle} from './styles/style';
import * as Font from 'expo-font';
import  AppLoading from 'expo-app-loading';
import Contacts from './components/Contacts';
import Main from './components/Main';

const fonts = () => Font.loadAsync({
	// Можете подключить сколько-угодно шрифтов
	'mt-bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
	'mt-light': require('./assets/fonts/Montserrat/Montserrat-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false)
  
  if (font) {
    return (
      <Main></Main>
    );
  } else {
    return (
      <AppLoading startAsync={fonts}  onFinish={() => setFont(true)} onError={console.warn}/>
    );
  }
  
}

const styles = StyleSheet.create({
  
});
