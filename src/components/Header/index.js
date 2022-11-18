import React, { useContext } from 'react'
import { Container, ContainerHeader, MenuButton, Menu, Icon, TextoBem, Nome } from './styles';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';



export default function index() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const uid = user && user.nome;
  
  return (
    <Container>
      <ContainerHeader>
        <MenuButton onPress={() => navigation.toggleDrawer()} >
          <Menu source={require('../../assets/images/menu.png')} />
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate('Perfil')}>
          <Icon source={require('../../assets/images/user-fake.jpeg')} />
        </MenuButton>
      </ContainerHeader>

      <TextoBem>Bem vindo!</TextoBem>
      <Nome>{user.nome}</Nome>
    </Container>
  );
}