import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Background, 
  Titulo, 
  Container, 
  Imagem, 
  AreaInput, 
  Input, 
  TextoInput, 
  ButtonConfirmar, 
  TextButton} from './style';

export default function Concluido() {
  const navigation = useNavigation();

  const[email, setEmail] = useState('');

 return (
   <Background>
    <Container>
      <Titulo>Agendado com sucesso!</Titulo>
      <Imagem source={require('../../assets/concluido.png')}/>
    </Container>

    <AreaInput>
          <TextoInput>Deseja informar algo</TextoInput>
          <Input 
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text)}
          />
    </AreaInput>

    <ButtonConfirmar onPress={ () => navigation.navigate('Home')}>
          <TextButton>Enviar</TextButton>
    </ButtonConfirmar>
   </Background>
 );
}