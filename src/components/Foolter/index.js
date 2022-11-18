import { View, Text } from 'react-native'
import React from 'react'
import { Titulo, Comentarios, Foolter } from './styles';

export default function Rodape() {
  return (
    <View>
      <Titulo>Nossa Localização</Titulo>
      <Foolter>
        <Comentarios>Rua Francisco Uchoa - 755 - P.Andrade</Comentarios>
        <Comentarios>Tel: (85) 3235-5761</Comentarios>
      </Foolter>
    </View>
  )
}