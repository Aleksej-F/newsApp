import React from 'react';
import { StyleSheet, Text, Button, View , Image, TextInput } from 'react-native';
import { gStyle } from '../styles/style'
import { Formik } from 'formik';

export default function Form() {
 
  return (
    <View >
      <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(value) => {
          console.log(value)
      }}>
          {(props) => {
              <View>   
                    <TextInput 
                        value={props.values.name} 
                        placeholder='Введите название' 
                        onChangeText={props.handleChange('name')}
                    /> 
                    <TextInput 
                        value={props.values.anons} 
                        placeholder='Введите анонс' 
                        onChangeText={props.handleChange('anons')}
                    />  
                    <TextInput 
                        value={props.values.full}
                        multiline 
                        placeholder='Введите статью' 
                        onChangeText={props.handleChange('full')}
                    />  
                    <TextInput 
                        value={props.values.img} 
                        placeholder='Укажите фото' 
                        onChangeText={props.handleChange('img')}
                    /> 
                    <Button title='Добавить' onPress={props.handleSubmit}/>
              </View>
          }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        marginTop: 25,
    
    },
});