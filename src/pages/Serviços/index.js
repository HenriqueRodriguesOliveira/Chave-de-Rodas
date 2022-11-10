import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker'

import { 
    Background, 
    ContainerTemplate,
    Template, 
    Titulo, 
    Container, 
    ContainerCheck,
    Servico,
    Suspensao,
    ButtonConfirmar,
    TextButton,
    Valor,
    Motor,
    Injecao,
    ContainerData,
    ContainerIcon,
    ContainerText,
    Icon,
    ContainerValor,
    ButtonData
    
} from './style';

export default function Serviços() {

  const navigation = useNavigation();

  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [date, setDate] = useState(new Date());


  valorTotal = 0
  servicosSelecionados = []

  const listItems = servicosSelecionados.map((myList)=>{   
    return <li>{myList}</li>;   
}); 

  function calcularTotal() {
    if(isSelected){
      valorTotal += 60
      servicosSelecionados.push("Diagnostico da suspensão\n")
    }

    if(isSelected2){
      valorTotal += 50
      servicosSelecionados.push("Diagnostico do Motor")
    }

    if(isSelected3){
      valorTotal += 150
      servicosSelecionados.push("Revisão na injeção eletrônica")
    }

    return valorTotal
 }

 async function cadastrar(){
  let servicos = await firebase.database().ref('usuario/servicos');
  let chave = servicos.push().key;

  servicos.child(chave).set({
    Diagnostico_da_suspensao: isSelected,
    Diagnostico_do_motor: isSelected2,
    Revisao_na_injecao_eletronica: isSelected3,
  });
 }

 return (

   <Background>
    <ScrollView>
    <ContainerTemplate>
    <Template  source={require('../../assets/images/carro.jpg')}/>
    </ContainerTemplate>
    
    <Titulo>Lista de Serviços</Titulo>

    <Container>
      <ContainerCheck>

       <ContainerIcon>
         <Icon source={require('../../assets/images/suspensao.png')} />
       </ContainerIcon>
       
       <ContainerText>
       <Suspensao>Diagnóstico da suspensão</Suspensao>
       <Valor>Valor: R$60,00</Valor>
       </ContainerText>

        <CheckBox
        style={{right: 15, bottom: 5}}
        value={isSelected}
        onValueChange={setSelection}
        />
      </ContainerCheck>

      <ContainerCheck>

       <ContainerIcon>
         <Icon source={require('../../assets/images/motor.png')} />
       </ContainerIcon>
       <ContainerText>
       <Motor>Diagnóstico do Motor</Motor>
       <Valor>Valor: R$50,00</Valor>
       </ContainerText>
        <CheckBox
        style={{right: 15, bottom: 5}}
        value={isSelected2}
        onValueChange={setSelection2}
        />
      </ContainerCheck>

      <ContainerCheck>
       <ContainerIcon>
         <Icon source={require('../../assets/images/injecao-eletronica.png')} />
       </ContainerIcon>
       <ContainerText>
       <Injecao>Revisão na injeção eletrônica</Injecao>
       <Valor>Valor: R$150,00</Valor>
       </ContainerText>
        <CheckBox
        style={{right: 15, bottom: 5}}
        value={isSelected3}
        onValueChange={setSelection3}
        />
      </ContainerCheck>
      
      <ContainerValor>
      <Servico>Valor total: ${calcularTotal()}</Servico>
      <ButtonConfirmar onPress={() => cadastrar().then(navigation.navigate('Concluido'))}>
        <TextButton>Confirmar</TextButton>
      </ButtonConfirmar>
      </ContainerValor>

      <Titulo>Agendar Serviços</Titulo>
      <ContainerData>

      <DatePicker
      style={{width:415, bottom:50}}
      date={date} 
      onDateChange={setDate} 
      />

      <ButtonData onPress={() => navigation.navigate('Concluido')}>
        <TextButton>Selecionar Data</TextButton>
      </ButtonData>
      </ContainerData>

    </Container>
    </ScrollView>

   </Background>
  );
}



