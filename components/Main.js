import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate('Contact');
  }
  const [news, setNews] = useState([
      {name: 'Google', anons: 'Google!!!', full: ' Google is cool!'},
  ])

    return (
        <View style={gStyle.main}>
         <Text style={gStyle.title}>Главная страница</Text>
        <Button title='Открыть страницу' onPress={loadScene}/>
        </View>
    );
}

const styles = StyleSheet.create({
   
});