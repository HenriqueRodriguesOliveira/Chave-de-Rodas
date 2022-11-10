import React, { useContext, useEffect, useState } from 'react';
import {Button, FlatList, ScrollView, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  firebase  from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import Listagem from '../../Listagem';

import {
  Background,
  ContainerHeader,
  MenuButton,
  Menu,
  Icon,
  TextoBem,
  Nome,
  Titulo, 
  Container, 
  Card, 
  ImageCard,
  ContainerMarcas, 
  ImgMarca,
  ContainerComentarios,
  Comentarios,
  Div,
  Foolter,
} from './style';


export default function Home(){
  const { user, signOut } = useContext(AuthContext);
  const [lista, setLista] = useState([]);
  
  const uid = user && user.nome;

  const navigation = useNavigation();

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('usuario/comentarios').limitToLast(3).once('value', (snapshot)=>{
        setLista([]);

        snapshot.forEach((childItem) =>  {
          let data = {
            key: childItem.key,
            feedback: childItem.val().feedback,
          };
          setLista(oldArray => [...oldArray, data]);
        })
      })
    }
    dados();
    },[]);
    
  return(
    <Background>

      <ContainerHeader>
        <MenuButton>
        <Menu source={require('../../assets/images/menu.png')} />
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate('Perfil')}>
        <Icon source={require('../../assets/images/user-fake.jpeg')} />
        </MenuButton>
      </ContainerHeader>

      <TextoBem>Bem vindo!</TextoBem>
      <Nome>{user.nome}</Nome>

      <Titulo>Quais serviços você precisa?</Titulo>
      <Container>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card onPress={ () => navigation.navigate('Serviços & Agendamento')} style={estilo.sombra}>
          <ImageCard source={require('../../assets/images/carro.jpg')}  />
        </Card>

        <Card onPress={ () => navigation.navigate('ServiçosM')} style={estilo.sombra}>
        <ImageCard source={require('../../assets/images/moto.png')} />
        </Card>

        <Card onPress={ () => navigation.navigate('ServiçosB')} style={estilo.sombra}>
        <ImageCard source={require('../../assets/images/bicicleta.png')} />
        </Card>
        </ScrollView>
      </Container>

      <Titulo>Marcas nas quais trabalhamos</Titulo>
      <Container>
        <ContainerMarcas style={estilo.sombra}>
          <ImgMarca source={require('../../assets/images/fiat.png')}/>
        </ContainerMarcas>
        <ContainerMarcas style={estilo.sombra}>
          <ImgMarca source={require('../../assets/images/gm.png')}/>
        </ContainerMarcas>
        <ContainerMarcas style={estilo.sombra}>
          <ImgMarca source={require('../../assets/images/toyota.png')}/>
        </ContainerMarcas>
        <ContainerMarcas style={estilo.sombra}>
          <ImgMarca source={require('../../assets/images/peugeot.png')}/>
        </ContainerMarcas>
      </Container>

      <Titulo>Nossa Avaliação</Titulo>

      <FlatList 
          keyExtractor={item => item.key}
          data={lista}
          renderItem={({item}) => ( <Listagem data={item} />)}/>

      
      <Div/>

      <Titulo>Nossa Localização</Titulo>
      <Foolter>
      <Comentarios>Rua Francisco Uchoa - 755 - P.Andrade</Comentarios>
      <Comentarios>Tel: (85) 3235-5761</Comentarios>
      </Foolter>

    </Background>
  );
}

const estilo = StyleSheet.create({
  sombra:{
    elevation: 3
  },
})


/*
<FlatList 
      keyExtractor={item => item.key}
      data={lista}
      renderItem={({item}) => ( <Listagem data={item} />)} />

      <Button
      title='Sair da conta'
      onPress={ () => signOut() }
      />



    
      <Titulo>Parceiros</Titulo>
      <Container>
        <ContainerMarcas>
          <Marcas source={require('../../assets/images/volvo.png')} />
        </ContainerMarcas>

        <ContainerMarcas>
        <Marcas source={require('../../assets/images/fiat.png')} />
        </ContainerMarcas>

        <ContainerMarcas>
        <Marcas source={require('../../assets/images/gm.png')} />
        </ContainerMarcas>

        <ContainerMarcas>
        <Marcas source={require('../../assets/images/mercedes.png')} />
        </ContainerMarcas>
      </Container>

*/