import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

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
        <AppStack.Navigator>
            <AppStack.Screen 
            name="Home" 
            component={Home}
            options={{headerShown: false}} 
            />

            <AppStack.Screen name="Serviços" component={Serviços}/>
            <AppStack.Screen name="ServiçosM" component={ServiçosM}/>
            <AppStack.Screen name="ServiçosB" component={ServiçosB}/>


            <AppStack.Screen name="Agendamento" component={Agendamento}/>
            <AppStack.Screen name="AgendamentoM" component={AgendamentoM}/>
            <AppStack.Screen name="AgendamentoB" component={AgendamentoB}/>

            <AppStack.Screen name="Concluido" component={Concluido} options={{headerShown: false}}/>
        </AppStack.Navigator>
    );
}

export default AppRoutes;