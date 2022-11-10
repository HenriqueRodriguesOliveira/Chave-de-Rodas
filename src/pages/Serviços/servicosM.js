import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';


import { 
    Background, 
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
    Injecao
} from './style';

export default function Serviços() {

  const navigation = useNavigation();

  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);

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
      valorTotal += 80
      servicosSelecionados.push("Revisão na injeção eletrônica")
    }

    return valorTotal
 }

 async function cadastrar(){
  let servicos = await firebase.database().ref('serviços');
  let chave = servicos.push().key;

  servicos.child(chave).set({
    Diagnostico_da_suspensao: isSelected,
    Diagnostico_do_motor: isSelected2,
    Revisao_na_injecao_eletronica: isSelected3,
  });
 }

 return (

   <Background>
    <Template  source={require('../../assets/images/moto.png')}/>
    
    <Titulo>Lista de Serviços</Titulo>

    <Container>
      <ContainerCheck>
       <Suspensao>Diagnostico da suspensão</Suspensao>
        <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        />
      </ContainerCheck>
      <Valor>Valor: R$60,00</Valor>
      

      <ContainerCheck>
       <Motor>Diagnostico do Motor</Motor>
        <CheckBox
        value={isSelected2}
        onValueChange={setSelection2}
        />
      </ContainerCheck>
      <Valor>Valor: R$50,00</Valor>


      <ContainerCheck>
       <Injecao>Revisão na injeção eletrônica</Injecao>
        <CheckBox
        value={isSelected3}
        onValueChange={setSelection3}
        />
      </ContainerCheck>
      <Valor>Valor: R$80,00</Valor>
      
      <ContainerCheck>
      <Servico>Valor total: ${calcularTotal()}</Servico>
      <ButtonConfirmar onPress={() => cadastrar().then(navigation.navigate('AgendamentoM'))}>
        <TextButton>Confirmar</TextButton>
      </ButtonConfirmar>
      </ContainerCheck>
    </Container>

   </Background>
  );
}


