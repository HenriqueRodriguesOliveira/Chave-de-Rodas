import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import { Background,  Botao, ImgPerfil, Titulo, Dados, Div } from './style';
import { AuthContext } from '../../contexts/auth';

export default function Perfil() {

 const { user, signOut, email } = useContext(AuthContext);

 return (
    <Background>
        
    <ImgPerfil source={require('../../assets/images/user-fake.jpeg')} />   
    <Titulo>Nome</Titulo>
    <Dados>{user.nome}</Dados>

    <Div/>

    <Titulo>Idade</Titulo>
    <Dados>22 anos</Dados>

    <Div/>

    <Titulo>Email</Titulo>
    <Dados>{user.email}</Dados>

    <Div/>

    <Titulo>Telefone</Titulo>
    <Dados>(85) 9 9999-9999</Dados>

    <Botao onPress={ () => signOut() } style={estilo.sombra}>
    <Dados style={{color: '#FFF'}}>Sair da conta</Dados>
    </Botao>

    </Background>
  );
}

const estilo = StyleSheet.create({
    sombra:{
        elevation: 5
    }
})