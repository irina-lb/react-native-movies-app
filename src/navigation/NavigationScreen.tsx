import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { Result } from '../interfaces/movieInterface';

export type RouteStackParams = {
    HomeScreen:undefined;
    DetailsScreen: Result;
}

const Stack = createStackNavigator<RouteStackParams>();

const  NavigationScreen=()=>{
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:'white'
                }
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
        </Stack.Navigator>
    )
}

export default NavigationScreen