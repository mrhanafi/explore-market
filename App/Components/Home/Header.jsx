import { View, Text, StyleSheet, Image, TextInput, Dimensions } from 'react-native'
import React from 'react'
import marker from '../../../assets/marker.png';
import placeholder from '../../../assets/placeholder.png';
import Colors from '../../Shared/Colors';

const Header = () => {
  return (
    <View style={{display:'flex',flexDirection: 'row',justifyContent:'space-between',gap: 10,alignItems:'center' }}>
      <Image source={marker} style={styles.logo} />
      <View>
        <TextInput placeholder='Search' style={styles.searchBar}/>
      </View>
      <Image source={placeholder} style={styles.userImage}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    logo:{
        width: 50,
        height: 50,
    },
    searchBar: {
        borderWidth: 1,
        borderColor: Colors.black,
        padding: 4,
        borderRadius: 50,
        paddingLeft:10,
        width: Dimensions.get('screen').width*0.6
    },
    userImage:{
        width:50,
        height:50,
        borderRadius: 100
    }
});