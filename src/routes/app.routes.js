import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';

import Serviços from '../pages/Serviços';
import ServiçosM from '../pages/Serviços/servicosM';
import ServiçosB from '../pages/Serviços/servicosB';

import Agendamento from '../pages/Agendamento';
import AgendamentoM from '../pages/Agendamento/agendamentoM';
import AgendamentoB from '../pages/Agendamento/agendamentoB';

import Concluido from '../pages/Concluido';

const AppStack =  createStackNavigator();

function AppRoutes(){
    return(
        <AppStack.Navigator initialRouteName='Concluido'>
            <AppStack.Screen 
            name="Home" 
            component={Home}
            options={{headerShown: false}} 
            />

            <AppStack.Screen name="Serviços & Agendamento" component={Serviços} />

            <AppStack.Screen name="ServiçosM" component={ServiçosM} options={{
                headerStyle:{
                    borderBottomColor: '#007D45',
                    borderBottomWidth: 1
                },
            }}/>
            <AppStack.Screen name="ServiçosB" component={ServiçosB} options={{
                headerStyle:{
                    borderBottomColor: '#007D45',
                    borderBottomWidth: 1
                },
            }}/>


            <AppStack.Screen name="Agendamento" component={Agendamento} 
            options={{
                headerStyle:{
                    borderBottomColor: '#007D45',
                    borderBottomWidth: 1
                },
            }}/>
            <AppStack.Screen name="AgendamentoM" component={AgendamentoM}
            options={{
                headerStyle:{
                    borderBottomColor: '#007D45',
                    borderBottomWidth: 1
                },
            }}/>
            <AppStack.Screen name="AgendamentoB" component={AgendamentoB}
            options={{
                headerStyle:{
                    borderBottomColor: '#007D45',
                    borderBottomWidth: 1
                },
            }}/>

            <AppStack.Screen name="Concluido" component={Concluido} options={{headerShown: false}}/>

            <AppStack.Screen name="Perfil" component={Perfil} />
        </AppStack.Navigator>
    );
}

export default AppRoutes;