import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import  firebase  from '../../services/firebaseConnection';
import Listagem from '../../Listagem';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import CardSv from '../../components/CardServices';
import Footer from '../../components/Foolter';

import { Background, Titulo, Div } from './style';

export default function Home(){
  const [lista, setLista] = useState([]);

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('Comentarios').limitToLast(3).on('value', (snapshot)=>{
      setLista([]);

      snapshot.forEach((childItem) =>  {
        let data = {
          key: childItem.key,
          feedback: childItem.val().feedback,
          date: childItem.val().date,
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
      
      <Header/>
      
      <CardSv/>

      <Cards/>

      <Titulo>Nossa Avaliação</Titulo>

      <FlatList 
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item.key}
          data={lista}
          renderItem={({item}) => (<Listagem data={item} />)}
      />

      <Div/>

      <Footer/>

      </ScrollView>
    </Background>
  );
}
