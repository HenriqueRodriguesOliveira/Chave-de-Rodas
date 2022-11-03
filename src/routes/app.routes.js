import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Serviços from '../pages/Serviços';
import Agendamento from '../pages/Agendamento';
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
            <AppStack.Screen name="Agendamento" component={Agendamento}/>
            <AppStack.Screen name="Concluido" component={Concluido} options={{headerShown: false}}/>
        </AppStack.Navigator>
    );
}

export default AppRoutes;