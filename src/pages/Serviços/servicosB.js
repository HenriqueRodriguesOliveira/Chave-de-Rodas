import React, { useState, useContext } from 'react';
import firebase from '../../services/firebaseConnection';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


import { 
    Background, 
    ContainerTemplate,
    Template, 
    Servicot,
    Titulo,
    TituloData, 
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

export default function ServiçosB() {

  const navigation = useNavigation();
  const[agendamento, setAgendamento] = useState('');


  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  valorTotal = 0
  testando = ''

  function calcularTotal() {
    if(isSelected){
      valorTotal += 80
    }

    if(isSelected2){
      valorTotal += 40
    }

    if(isSelected3){
      valorTotal += 60
    }

    return valorTotal;
 }

 function ServicosCalcular() {
  if(isSelected){
    testando += 'Revisão completa, '
  }

  if(isSelected2){
    testando += 'Troca da corrente, '
  }

  if(isSelected3){
    testando += 'Troca do aro'
  }

  return testando;
}


 async function cadastrar(){
  let servicos = await firebase.database().ref('usuario/servicos');
  let chave = servicos.push().key;

  servicos.child(chave).set({
    serviços: testando,
    total: valorTotal,
  })
 }

 async function handleAdd(date){
  if(agendamento !== ''){
    let servicos = await firebase.database().ref('usuario/agendamentoBicicleta');
    let chave = servicos.push().key;
    await firebase.database().ref('usuario/agendamentoBicicleta').child(chave).set({
      agenda: date.toString(),
    })
  setAgendamento('');
}}

  const handleConfirm = (date) => {
  alert("Agendado com sucesso");
  handleAdd(date)
  hideDatePicker();
  };

  const hideDatePicker = () => {
  setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
  setDatePickerVisibility(true);
  };

 return (

   <Background>
    <ScrollView>
    <ContainerTemplate>
    <Template  source={require('../../assets/images/bicicleta.png')}/>
    </ContainerTemplate>
    
    <Titulo>Lista de Serviços</Titulo>

    <Container>
      <ContainerCheck>

       <ContainerIcon>
         <Icon source={require('../../assets/images/suspensaoB.png')} />
       </ContainerIcon>
       
       <ContainerText>
       <Suspensao style={{marginRight: 60, bottom: 5}}>Revisão completa</Suspensao>
       <Valor>Valor: R$80,00</Valor>
       </ContainerText>

        <CheckBox
        style={{right: 20, bottom: 5}}
        value={isSelected}
        onValueChange={setSelection}
        />
      </ContainerCheck>

      <ContainerCheck>

       <ContainerIcon>
         <Icon source={require('../../assets/images/corrente.png')} />
       </ContainerIcon>
       <ContainerText>
       <Motor style={{marginRight: 20, bottom: 5}}>Troca da corrente</Motor>
       <Valor>Valor: R$40,00</Valor>
       </ContainerText>
        <CheckBox
        style={{right: 20, bottom: 5}}
        value={isSelected2}
        onValueChange={setSelection2}
        />
      </ContainerCheck>

      <ContainerCheck>
       <ContainerIcon>
         <Icon source={require('../../assets/images/roda.png')} />
       </ContainerIcon>
       <ContainerText>
       <Injecao style={{marginRight: 120, bottom: 5}}>Troca do aro</Injecao>
       <Valor>Valor: R$60,00</Valor>
       </ContainerText>
        <CheckBox
        style={{ right: 20, bottom: 5}}
        value={isSelected3}
        onValueChange={setSelection3}
        />
      </ContainerCheck>

      <ContainerData>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        is24Hour
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      
      <TituloData>Agendar Serviço 🗓</TituloData>

      <ButtonData onPress={showDatePicker}>
        <TextButton style={{color:'#121212'}}>Selecionar Data</TextButton>
      </ButtonData>
      </ContainerData>
      
      <ContainerValor>
      <Servico>Valor total: ${calcularTotal()}</Servico>
      <Servicot>Valor total: ${ServicosCalcular()}</Servicot>

      <ButtonConfirmar onPress={() => {
        cadastrar().then(navigation.navigate('Concluido'))
        alert('Confirmado')
        }}>
        <TextButton>Confirmar</TextButton>
        
      </ButtonConfirmar>
      </ContainerValor>

    </Container>
    </ScrollView>

   </Background>
  );
}


