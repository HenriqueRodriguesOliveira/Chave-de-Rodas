import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Lista({data}) {
 return (
   <View style={style.container}>
    <Text style={style.textos}>Serviços: {data.serviços}</Text>
    <Text style={style.textos}>Valor: R$ {data.total},00</Text>
    
    
   </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    padding: 15,
    marginBottom: 8,
    marginEnd: 15,
    marginStart: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    elevation: 1
  },
  textos:{
    color: '#404258',
    fontSize: 18,
    margin: 8,
  }
})