import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';

const PlaceDetailsItem = ({place}) => {
  return (
    <View>
      <Text style={{fontSize:26,fontFamily:'bold'}}>{place?.displayName?.text}</Text>
      <View style={{display:'flex',alignItems:'center',gap:5,marginTop:5,flexDirection:'row'}}>
        <AntDesign name="star" size={20} color={Colors.yellow} />
        <Text>{place?.rating}</Text>
      </View>
    </View>
  )
}

export default PlaceDetailsItem