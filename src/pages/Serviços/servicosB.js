import React, { useState, useContext } from 'react';
import firebase from '../../services/firebaseConnection';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


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


  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Escolha a data e o horário');

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

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();
    let fTime = 'Horas: ' + tempDate.getHours() + ' | Minutos: ' + tempDate.getMinutes();
    setText(fDate + '   ' +  fTime)
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  async function cadastrar(){
    let uid = await firebase.auth().currentUser.uid
    let key = await firebase.database().ref('Agendamento/Bicicletas/Serviços').child(uid).push().key
    await firebase.database().ref('Agendamento/Bicicletas/Serviços').child(uid).child(key).set({
      servicos: testando,
      total: valorTotal,
      agenda: text,
    });
  }

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

      <ContainerValor>
      <Servico>Valor total: ${calcularTotal()}</Servico>
      <Servicot>Valor total: ${ServicosCalcular()}</Servicot>
      </ContainerValor>

      <ContainerData>
        {show && (<DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={false}
        display='default'
        onChange={onChange}
        />)}
        <ButtonData onPress={() => showMode('date')}>
          <TextButton style={{color:'#121212'}}>Selecionar Data</TextButton>
        </ButtonData>
        <ButtonData onPress={() => showMode('time')}>
          <TextButton style={{color:'#121212'}}>Selecionar Horário</TextButton>
        </ButtonData>
      </ContainerData>
      
      <ContainerValor>
        <TituloData style={{marginLeft:'auto', marginRight:'auto'}}>{text}</TituloData>
      </ContainerValor>

      <ButtonConfirmar onPress={() => {
        cadastrar().then(navigation.navigate('Concluido'))
        }}>
        <TextButton>Confirmar</TextButton>
      </ButtonConfirmar>

    </Container>
    </ScrollView>

   </Background>
  );
}


