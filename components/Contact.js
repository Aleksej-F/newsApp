import React from 'react';
import { StyleSheet, Text, Button, View  } from 'react-native';
import { gStyle } from '../styles/style'

export default function Contact() {
  const loadScene = () => {
    navigation.goBack();
  }
  return (
    <View style={gStyle.main}>
     <Text style={gStyle.title}>Страница про нас</Text>
     <Button title='Открыть страницу' onPress={loadScene}/>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
