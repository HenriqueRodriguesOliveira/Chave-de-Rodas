import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
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

  const[comentarios, setComentarios] = useState('');

    async function comentario(){
      let feedbacks = await firebase.database().ref('feedbacks');
      let chave = feedbacks.push().key;

      feedbacks.child(chave).set({
        feedback: comentarios
      })
      .then(()=>{
        console.log('COMENTARIO ENVIADO')
      })
    }

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
          value={comentarios}
          onChangeText={(text) => setComentarios(text)}
          />
    </AreaInput>

    <ButtonConfirmar onPress={() => comentario().then(navigation.navigate('Home'))}>
          <TextButton>Enviar</TextButton>
    </ButtonConfirmar>
   </Background>
 );
}