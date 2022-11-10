import React, { useContext, useEffect, useState } from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  firebase  from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

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
      await firebase.database().ref('comentarios').limitToLast(5).once('value', (snapshot)=>{
        setLista([]);

        snapshot.forEach((childItem) =>  {
          let data = {
            comentarios: childItem.comentarios,
            data: childItem.date,
          };
          setLista(oldArray => [...oldArray, data]);
        })
      })
    }
    dados();
    },[]);
    


  return(
    <Background>
      <ScrollView>
      <ContainerHeader>
        <MenuButton>
        <Menu source={require('../../assets/images/menu.png')} />
        </MenuButton>
        <MenuButton>
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
      
      <ContainerComentarios style={estilo.sombra}>
         <Comentarios style={{color: '#404258'}}>
          Henrique Rodrigues                    09/11/2022
         </Comentarios>
         <Comentarios>
          Nota 10, adorei o serviço!!
         </Comentarios>
      </ContainerComentarios>
      <ContainerComentarios style={estilo.sombra}>
         <Comentarios style={{color: '#404258'}}>
          Henrique Rodrigues                    09/11/2022
         </Comentarios>
         <Comentarios>
          Nota 10, adorei o serviço!!
         </Comentarios>
      </ContainerComentarios>

      <Div/>

      <Titulo>Nossa Localização</Titulo>
      <Foolter>
      <Comentarios>Rua Francisco Uchoa - 755 - P.Andrade</Comentarios>
      <Comentarios>Tel: (85) 3235-5761</Comentarios>
      </Foolter>
      
      </ScrollView>
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