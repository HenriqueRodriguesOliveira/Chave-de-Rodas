import React, { useState, useEffect } from 'react';
import { PermissionsAndroid, Dimensions, Platform, StyleSheet, ScrollView} from 'react-native';
import { Background, Titulo, Container,  AreaInput, Input, TextoInput, ButtonConfirmar, TextButton} from './style';
import firebase from '../../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
//import MapViewDirections from 'react-native-maps-directions';


const ofcMap = require('../../assets/images/map-ofc.png');
const car = require('../../assets/images/car.png');
//const {width, height} = Dimensions.get('screen');
//const GOOGLE_MAPS_APIKEY = 'AIzaSyBE67UQe66mGZX6ceehhybpJlL-CugWszI';

export default function Concluido() {
  const navigation = useNavigation();
  
  const [region, setRegion] = useState(null);

  const [destino, setDestino] = React.useState({
    latitude: -3.7331,
    longitude: -38.5827,
  });
  const[comentario, setComentario] = useState('');

  useEffect(() => {
    getMyLocation()
  },[])

  function getMyLocation(){
    Geolocation.getCurrentPosition(location => {
      console.log("LAT", location.coords.latitude)
      console.log("LONG", location.coords.longitude)

      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      })
    },
  () => { console.log("Deu algum erro")}, {
    enableHighAccuracy: true,
    timeout: 2000,
  })
  }

  async function handleAdd(){
      let comentarios = await firebase.database().ref('Comentarios');
      let chave = comentarios.push().key;
      comentarios.child(chave).set({
        feedback: comentario,
        date: format(new Date(), 'dd/MM/yyyy')
      });
      alert('Cadastrado com sucesso!'); 
 }

 return (
   <Background>
    <ScrollView>
    <Container>
      
      <MapView
      onMapReady={() => {
        Platform.OS === 'android' ?
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(() => {
            console.log("USUARIO ACEITOU")
          })
          : ''
      }}
      style={styles.map}
       zoomEnabled={true}
       initialRegion={region}
       minZoomLevel={17}
       showsUserLocation={true}
       loadingEnabled={true}
     >
     
     <Marker 
     draggable
     image={car}
     coordinate={region}
     onDragEnd={(direction) => setRegion(direction.nativeEvent.coordinate)}
     />

     <Marker
     coordinate={destino}
     image={ofcMap}
     onDragEnd={(direction) => setDestino(direction.nativeEvent.coordinate)}
     />

     {/* GUIAR DO PONTO DE PARTIDA ATË A LOCALIZAÇÃO DESEJADA
     <MapViewDirections 
      origin={region}
      destination={destino}
      apikey={GOOGLE_MAPS_APIKEY}
    />
    */}

     <Polyline
     coordinates={[region, destino]}
     strokeColor={"black"}
     strokeWidth={3}
     />

     </MapView>
    </Container>

    <Titulo>Agendado com sucesso!👏</Titulo>

    <AreaInput>
          <TextoInput>Deseja informar algo</TextoInput>
          <Input 
          autoCorrect={false}
          autoCapitalize="none"
          value={comentario}
          onChangeText={(text) => setComentario(text)}
          />
    </AreaInput>

    <ButtonConfirmar onPress={() => handleAdd().then(navigation.navigate('Home'))}>
          <TextButton>Confirmar</TextButton>
    </ButtonConfirmar>
    </ScrollView>
   </Background>
 );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
   
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });