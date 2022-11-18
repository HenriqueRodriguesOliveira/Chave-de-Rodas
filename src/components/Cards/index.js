import React from 'react'
import { StyleSheet } from 'react-native';
import {  Container, Titulo, ContainerRow, ContainerMarcas, ImgMarca } from './styles';

export default function Cards() {
  return (
    <Container>
      <Titulo>Marcas nas quais trabalhamos</Titulo>
      <ContainerRow>
      <ContainerMarcas style={estilo.sombra}>
        <ImgMarca source={require('../../assets/images/fiat.png')}/>
      </ContainerMarcas>

      <ContainerMarcas style={estilo.sombra}>
        <ImgMarca source={require('../../assets/images/gm.png')}/>
      </ContainerMarcas>

      <ContainerMarcas style={estilo.sombra}>
        <ImgMarca source={require('../../assets/images/toyota.png')}/>
      </ContainerMarcas>

      <ContainerMarcas style={estilo.sombra}>
        <ImgMarca source={require('../../assets/images/peugeot.png')}/>
      </ContainerMarcas>
      </ContainerRow>
    </Container>
  );
}


const estilo = StyleSheet.create({
  sombra:{
    elevation: 3
  },
})