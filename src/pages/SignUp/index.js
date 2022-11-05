import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { 
  Background, 
  Container,
  Logo, 
  AreaInput, 
  Input, 
  SubmitButton, 
  TextButton,
} from '../SignIn/styles';

export default function SignUp(){
  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);
  
  function handleSignUp(){
    signUp(email, password, nome);
  }

  return(
    <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}>

        <Logo source={require('../../assets/Logo.png')}/>

        <AreaInput>
          <Input 
          placeholder="Name"
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={ (text) => setNome(text)}
          />
        </AreaInput>
        
        <AreaInput>
          <Input 
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          secureTextEntry={true}
          onChangeText={ (text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <TextButton>Cadastrar</TextButton>
        </SubmitButton>

        
      </Container>
    </Background>
  );
}