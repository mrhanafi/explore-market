import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { UserLocationContext } from './App/Context/UserLocationContext';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'regular': require('./assets/Fonts/Raleway-Regular.ttf'),
    'bold': require('./assets/Fonts/Raleway-Bold.ttf'),
    'semi-bold': require('./assets/Fonts/Raleway-SemiBold.ttf'),
  });

  const [location,setLocation] = useState(null);
  const [errorMsg,setErrorMsg] = useState(null);

  useEffect(() => {

    async function getCurrentLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // console.log(location)
    }

    getCurrentLocation();
  }, []);

  
  return (
    <View style={styles.container}>
      <UserLocationContext.Provider value={{location,setLocation}}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
        
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
