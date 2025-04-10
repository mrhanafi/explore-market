import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '../../Shared/Colors';
import GlobalApi from '../../Services/GlobalApi';

const PlaceItem = ({place}) => {
    // console.log('item',place)
  return (
    <View style={{display:'flex',flexDirection: 'row',flex:1,width:'100%',alignItems:'center',gap:15,marginBottom:20}}>
      {place?.photos ? <Image source={{uri:"https://places.googleapis.com/v1/"+
        `${place?.photos[0]?.name}/media`+
        "?maxWidthPx=400&maxHeightPx=400"+
        `&key=AIzaSyB5m_w8mVAD1YeLIrrEQp3rdKd3L7fA-SE`
      }} style={{width:110, height:110,borderRadius:15}}/> 
      : <Image source={require('../../../assets/placeholder.png')} style={{width:110, height:110,borderRadius:15}}/>}

      
      <View style={{flex:1}}>
        <Text numberOfLines={2 } style={{fontSize:18,fontFamily: 'bold',marginBottom:10}}>{place?.displayName?.text}</Text>
        <Text numberOfLines={2} style={{fontSize: 18,marginBottom:10}}>{place?.formattedAddress}</Text>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:5 }}>
        <AntDesign name="star" size={20} color={Colors.yellow} />
        <Text>{place?.rating}</Text>
        </View>
      </View>
    </View>
  )
}

export default PlaceItem