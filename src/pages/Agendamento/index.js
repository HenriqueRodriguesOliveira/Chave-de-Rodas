import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native'
import {Background, Container, Template, Titulo, ButtonConfirmar, TextButton} from '../Serviços/style';

export default function Agendamento() {
  const [date, setDate] = useState(new Date())
  const navigation = useNavigation();
  return (
    <Background>
        <Template source={require('../../assets/carro.jpg')}/>
        
        <Titulo>Selecione Data/Hora</Titulo>

        <DatePicker 
        style={styled.width}
        date={date} 
        onDateChange={setDate}
        />

        <Container>

        <ButtonConfirmar onPress={ () => navigation.navigate('Concluido')}>
          <TextButton>Confirmar</TextButton>
        </ButtonConfirmar>

        </Container>

    </Background>
   );
}

const styled = StyleSheet.create({
   width:{
    width: 360,
    marginBottom: 20
   },
})