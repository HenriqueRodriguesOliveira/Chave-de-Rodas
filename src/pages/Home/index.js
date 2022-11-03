import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

import { AuthContext } from '../../contexts/auth';

export default function Home(){
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();


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

        <Card>
        <ImageCard source={require('../../assets/moto.png')} />
        </Card>

        <Card>
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
          <Nome>Maria</Nome>
          <Comentarios>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Comentarios>
        </ContainerFeed>

        <ContainerFeed>
          <Nome>Olá</Nome>
          <Comentarios>teste teste teste</Comentarios>
        </ContainerFeed>
      </Container>

      <Button
      title='Sair da conta'
      onPress={ () => signOut() }
      />
    </Background>
  );
}