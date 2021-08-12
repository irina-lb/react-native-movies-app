import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationScreen from './src/navigation/NavigationScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState =({children}: any)=>{
  return(
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <NavigationScreen/>
      </AppState>
    </NavigationContainer>
  );
}
