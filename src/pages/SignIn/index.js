import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';

import { 
  Background, 
  Container,
  Logo, 
  AreaInput, 
  Input, 
  SubmitButton, 
  TextButton,
  ButtonReset,
  TextReset,
  Div,
  ContainerButton,
  IconButton,
  Icon,
  TextRegister,
  Link,
  LinkText
} from './styles';

export default function SignIn(){
  const navigation = useNavigation();

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password);
  }

  return(
    <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}>

        <Logo source={require('../../assets/Logo.png')}/>

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

        <ButtonReset>
          <TextReset>Esqueceu a senha?</TextReset>
        </ButtonReset>

        <SubmitButton onPress={handleLogin}>
          <TextButton>Acessar</TextButton>
        </SubmitButton>

        <Div>Acessar com </Div>

        <ContainerButton>
          <IconButton>
            <Icon source={require('../../assets/facebook.png')}/>
          </IconButton>

          <IconButton>
            <Icon source={require('../../assets/google.png')}/>
          </IconButton>
        </ContainerButton>

        <ContainerButton>
          <TextRegister>Ainda não possui conta?</TextRegister>
          <Link onPress={ () => navigation.navigate('SignUp')}>
            <LinkText>Cadastre-se!</LinkText>
          </Link>
        </ContainerButton>

        
      </Container>
    </Background>
  );
}