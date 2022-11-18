import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Titulo, Container, Card, ImageCard } from './styles';
import { useNavigation } from '@react-navigation/native';


export default function CardSv() {
  const navigation = useNavigation();
  return (
    <View>
      <Titulo>Quais serviços você precisa?</Titulo>
      <Container>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card onPress={ () => navigation.navigate('Serviços de Carros')} style={estilo.sombra}>
          <ImageCard source={require('../../assets/images/carro.jpg')}  />
        </Card>

        <Card onPress={ () => navigation.navigate('Serviços de Motos')} style={estilo.sombra}>
        <ImageCard source={require('../../assets/images/moto.png')} />
        </Card>

        <Card onPress={ () => navigation.navigate('Serviços de Bicicletas')} style={estilo.sombra}>
        <ImageCard source={require('../../assets/images/bicicleta.png')} />
        </Card>
        </ScrollView>
      </Container>
    </View>
  )
}


const estilo = StyleSheet.create({
    sombra:{
      elevation: 3
    },
  })
  