import { View, Text, Platform } from 'react-native'
import React from 'react'
import { TransitionPresets,createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import PlaceDetails from '../Components/PlaceDetails/PlaceDetails';
// import { TransitionPresets } from '@react-navigation/bottom-tabs';

const HomeNavigation = () => {
    const isAndroid = true;
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
        gestureEnabled:true,
        ...(Platform.OS === 'android' && TransitionPresets.ModalPresentationIOS)
    }}>
        <Stack.Screen name='home-screen' component={Home}/>
        <Stack.Screen name='place-details' component={PlaceDetails} screenOptions={{
            presentation:'modal'
        }} />
    </Stack.Navigator>
  )
}

export default HomeNavigation