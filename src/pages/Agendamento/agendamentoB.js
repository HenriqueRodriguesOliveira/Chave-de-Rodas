import React, { useState, Component } from 'react';
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native'
import {Background, Container, Template, Titulo, ButtonConfirmar, TextButton} from '../Serviços/style';
import firebase from '../../services/firebaseConnection';

export default function Agendamento() {
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation();

  async function handleAdd(){
    let agendamento = await firebase.database().ref('agendamento');
    let chave = agendamento.push().key;
  
    agendamento.child(chave).set({
      data: date
    });
   }

  return (
    <Background>
        <Template source={require('../../assets/bicicleta.png')}/>
        
        <Titulo>Selecione Data/Hora</Titulo>

        <DatePicker 
        style={styled.width}
        value={date}
        date={date}
        onDateChange={setDate}
        //minimumDate={60}
        />

        <Container>

        <ButtonConfirmar onPress={() => navigation.navigate('Concluido')}>
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

//<ButtonConfirmar onPress={ () => agendar().then(navigation.navigate('Concluido'))}>
