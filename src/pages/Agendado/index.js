import React, {useState, useEffect} from 'react';
import { FlatList } from 'react-native';
import { Background, Titulo } from './styled';
import firebase from '../../services/firebaseConnection';
import Lista from './listagem';

export default function Agendado() {

    const [lista, setLista] = useState([]);

    useEffect(()=> {
        async function dados(){
          await firebase.database().ref('usuario/servicos').limitToLast(5).on('value', (snapshot)=>{
            setLista([]);
    
            snapshot.forEach((childItem) =>  {
              let data = {
                key: childItem.key,
                serviços: childItem.val().serviços,
                total: childItem.val().total,
            };
            setLista(oldArray => [...oldArray, data]);
        })
        })
    }
    dados();
    },[]);

 return (
    <Background>
      <FlatList 
          keyExtractor={item => item.key}
          data={lista}
          renderItem={({item}) => ( <Lista data={item} />)}/>
    </Background>
  );
}