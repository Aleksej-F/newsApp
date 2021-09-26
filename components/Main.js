import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ addHandler}) {
    const [text, setValue] = useState('');
    
    const onChange = (text) => {
        setValue(text)
    };

    return (
        <View style={gStyle.main}>
         <Text style={gStyle.title}>Главная страница</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   
});