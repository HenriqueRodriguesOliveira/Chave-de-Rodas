import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Listagem({data}) {
  console.log(data)
 return (
   <View style={style.container}>
    <Text style={style.comentario}>Comentário:            {data.date}</Text>
    <View style={{backgroundColor: '#f1f1f1', height: 1, width: 250}}/>
    <Text style={style.textos}>{data.feedback}</Text>
    
   </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    padding: 25,
    margin: 18,
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 4,
  },
  textos:{
    color: '#404258',
    fontSize: 18,
    top: 5
  },
  comentario:{
    color: '#404258',
    fontSize: 18,
    bottom:8,
  }
})