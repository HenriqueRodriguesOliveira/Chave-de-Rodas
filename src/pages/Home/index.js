import React, { useContext, useEffect, useState } from 'react';
import {Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  firebase  from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

import {
  Header,
  Menu,
  Icon,
  Background, 
  Container, 
  Titulo, 
  Card, 
  ImageCard, 
  ContainerFeed, 
  Nome, 
  Comentarios,
  ContainerMarcas,
  Marcas,
  MenuButton
} from './style';


export default function Home(){
  const { user, signOut } = useContext(AuthContext);
  const { comentario, setComentarios } = useState('');
  const navigation = useNavigation();

    
  async function dados(){
    await firebase.database().ref('feedbacks').on('value').then((snapshot) =>{
      let data = {
        feedbacks: snapshot.val().feedbacks,
      };
      setComentarios(data);
    })
  
   }



  return(
    <Background>

      <Header>
        <MenuButton>
        <Menu source={require('../../assets/menu.png')} />
        </MenuButton>
        <MenuButton>
        <Icon source={require('../../assets/notificacao.png')} />
        </MenuButton>
        <MenuButton>
        <Icon source={require('../../assets/perfil.png')} />
        </MenuButton>
        
      </Header>

      <Titulo>Serviços</Titulo>
      <Container>
        <Card  onPress={ () => navigation.navigate('Serviços')}>
          <ImageCard source={require('../../assets/carro.jpg')} />
        </Card>

        <Card onPress={ () => navigation.navigate('ServiçosM')}>
        <ImageCard source={require('../../assets/moto.png')} />
        </Card>

        <Card onPress={ () => navigation.navigate('ServiçosB')}>
        <ImageCard source={require('../../assets/bicicleta.png')} />
        </Card>
      </Container>

      <Titulo>Parceiros</Titulo>
      <Container>
        <ContainerMarcas>
          <Marcas source={require('../../assets/volvo.png')} />
        </ContainerMarcas>

        <ContainerMarcas>
        <Marcas source={require('../../assets/fiat.png')} />
        </ContainerMarcas>

        <ContainerMarcas>
        <Marcas source={require('../../assets/gm.png')} />
        </ContainerMarcas>

        <ContainerMarcas>
        <Marcas source={require('../../assets/mercedes.png')} />
        </ContainerMarcas>
      </Container>

      <Titulo>FeedBacks</Titulo>
      <Container>
        <ContainerFeed>
          <Nome>{user.nome}</Nome>
          <Comentarios></Comentarios>
        </ContainerFeed>
      </Container>

      <Button
      title='Sair da conta'
      onPress={ () => signOut() }
      />
    </Background>
  );
}