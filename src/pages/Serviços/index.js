import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    Background, 
    Template, 
    Titulo, 
    Container, 
    Servico,
    ContainerMap,
    ButtonConfirmar,
    TextButton,
    CheckBox,
    Check,
} from './style';

export default function Serviços() {
 const navigation = useNavigation();

 const [languages, setLanguages] = useState([]);

 const options = [
 "Diagnostico da suspensão.....R$60", 
 "Diagnostico do motor..............R$50", 
 "Revisão na injeção eletrônica.R$120", 
 "Troca do óleo do motor...........R$40"
]

 function pickLanguage(selectedLanguage){
   if(languages.includes(selectedLanguage)){
    setLanguages(languages.filter(Language => Language !== selectedLanguage))
    return;
   }
   setLanguages(Languages=>Languages.concat(selectedLanguage))
  } 
  

 return (

   <Background>
    <Template  source={require('../../assets/carro.jpg')}/>
    
    <Titulo>Lista de Serviços</Titulo>

    <Container>

        {
            options.map(options=>
            <ContainerMap key={options}>
            <CheckBox onPress={() => pickLanguage(options)}>
            { languages.includes(options) && <Check>✔️</Check>}
            </CheckBox>
            <Servico>{options}</Servico>
            </ContainerMap>
            )
        }

      <ButtonConfirmar onPress={ () => navigation.navigate('Agendamento')}>
        <TextButton>Confirmar</TextButton>
      </ButtonConfirmar>

    </Container>
   </Background>
  );
}