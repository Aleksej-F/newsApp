import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import Form from './Form';

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate('Contact')
  };
  const [news, setNews] = useState([
      {name: 'Google', anons: 'Google!!!', full: ' Google is cool!', key:'1', img:'https://itproger.com/img/courses/1538477858.jpg'},
      {name: 'Apple', anons: 'Apple!!!', full: ' Apple is cool!', key:'2', img:'https://itproger.com/img/courses/1494770683.jpg'},
      {name: 'FaceBook', anons: 'FaceBook!!!', full: ' FaceBook is cool!', key:'3', img:'https://itproger.com/img/courses/1496744736.jpg'},
  ]);

  const [modalWindow, setModalWindow] = useState(false);

    return (
        <View style={gStyle.main}>
           
           <Modal visible={'false'}>  
                <View style={gStyle.main}>
                    <Ionicons name="close" size={24} color="black" onPress={() =>{
                        setModalWindow(false) 
                        console.log(modalWindow)} 
                    }/>
                    <Text style={styles.title}> Форма добавления статей</Text>
                    <Form/>
                </View>
           </Modal> 

           <Form/>
         <Ionicons  name="add-circle" size={24} color="black" style={styles.iconAdd} onPress={() => {
             
             setModalWindow(true)
             console.log(modalWindow)}}/>
         <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                    <Image style={styles.image} source={{uri: item.img}} />
                    <Text style={styles.title}>{ item.name}</Text>
                    <Text style={styles.anons}>{ item.anons}</Text>
                </TouchableOpacity>
            )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    iconAdd: {
        textAlign:'center',
        marginBottom:15
    },
    header: {
        marginBottom: 30
    },
    item: {
       width: '100%',
       marginBottom: 30
   },
   title: {
       fontFamily: 'my-bold',
       fontSize: 22,
       textAlign:'center',
       marginTop: 20,
       color: '#474747'
   },
   anons:{
    fontFamily: 'my-light',
    fontSize: 16,
    textAlign:'center',
    marginTop: 5,
    color: '#474747'
   },
   image:{
    width: '100%',
    height: 200,
   }
});