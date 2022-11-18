import React, {useState, useEffect, useContext} from 'react';
import { FlatList } from 'react-native';
import { Background } from './styled';
import firebase from '../../services/firebaseConnection';
import Lista from './listagem';
import { AuthContext } from '../../contexts/auth';

export default function Agendado() {

    const [lista, setLista] = useState([]);
    const { user } = useContext(AuthContext);
    const uid = user && user.uid;


    useEffect(()=> {
      async function dados(){
        await firebase.database().ref('Agendamento').child(uid).limitToLast(5).on('value', (snapshot)=>{
          setLista([]);
          
          snapshot.forEach((childItem) =>  {
            let data = {
              key: childItem.key,
              agenda: childItem.val().agenda,
              servicos: childItem.val().servicos,
              total: childItem.val().total,
            };
          setLista(oldArray => [...oldArray, data]);
          console.log(data)
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