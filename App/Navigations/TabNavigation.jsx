import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import HomeNavigation from './HomeNavigation';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={HomeNavigation} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color,size}) => (
            <Entypo name="home" size={size} color={color} />
        )
      }}
      />
    <Tab.Screen name="Search" component={Search} 
    options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color,size}) => (
            <Feather name="search" size={size} color={color} />
        )
      }}
    />
      <Tab.Screen name="Fav" component={Fav} 
      options={{
        tabBarLabel: 'Fav',
        tabBarIcon: ({color,size}) => (
            <Fontisto name="favorite" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color,size}) => (
            <FontAwesome name="user-circle" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation