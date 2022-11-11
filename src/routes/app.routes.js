import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';

import Serviços from '../pages/Serviços';
import ServiçosM from '../pages/Serviços/servicosM';
import ServiçosB from '../pages/Serviços/servicosB';

import Agendado from '../pages/Agendado';

import Concluido from '../pages/Concluido';

const Drawer =  createDrawerNavigator();

function AppRoutes(){
    return(
        <Drawer.Navigator initialRouteName='Home' screenOptions={{
          drawerStyle:{
            backgroundColor: '#fff',
            width: 240,
          },
            drawerActiveBackgroundColor: '#3E6D9C',
            drawerActiveTintColor:'#FFF',
            drawerPosition: 'left'
          }}>


            <Drawer.Screen 
            name="Home" 
            component={Home}
            options={{headerShown:false}}
            />

            <Drawer.Screen name="Serviços de Carros" component={Serviços} screenOptions={{headerShown:true}}/>

            <Drawer.Screen name="Serviços de Motos" component={ServiçosM}/>

            <Drawer.Screen name="Serviços de Bicicletas" component={ServiçosB}/>

            <Drawer.Screen name="Serviços Agendados" component={Agendado}/>

            <Drawer.Screen name="Perfil" component={Perfil} options={{headerTitleStyle:{
              textAlign: 'center'
            }}}/>

            <Drawer.Screen name="Concluido" component={Concluido} options={{
              headerShown: false, drawerLabel: () => null, headerLeft: null,
            }}/>

        </Drawer.Navigator>
    );
}

export default AppRoutes;