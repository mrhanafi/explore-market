import { View, Text, Dimensions, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Shared/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar = () => {
    const [searchInput,setSearchInput] = useState('');
    const [searchText,setSearchText] = useState('');
  return (
    <View style={{}}>
      <LinearGradient
        // Button Linear Gradient
        colors={[Colors.white,'transparent']}
        style={{paddingHorizontal:20,paddingTop: 40,width:Dimensions.get('screen').width}}>
            <View style={{display:'flex',flexDirection: 'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'bold',fontSize:35}}>Discover</Text>
                {/* <Image source={require('../../../assets/placeholder.png')} style={{width:50,height:50,borderRadius:100}} /> */}
            </View>
            <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center',backgroundColor:'white',borderRadius:5,paddingLeft: 10, marginTop:20}}>
            <Ionicons name="search" size={24} color="black" />
            <TextInput placeholder='Search' style={{backgroundColor:'white', width:'80%'}} onChangeText={(val) => setSearchInput(val)} onSubmitEditing={() => setSearchText(searchInput)} />
            </View>
      </LinearGradient>
    </View>
  )
}

export default SearchBar