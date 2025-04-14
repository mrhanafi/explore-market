import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '../../Shared/Colors';

const BusinessItem = ({place}) => {
  return (
    <View style={{width:140,backgroundColor:'white',borderRadius:10,padding:10,margin:5,elevation:0.4}}>
      {place?.photos ? <Image source={{uri:"https://places.googleapis.com/v1/"+
              `${place?.photos[0]?.name}/media`+
              "?maxWidthPx=400&maxHeightPx=400"+
              `&key=AIzaSyB5m_w8mVAD1YeLIrrEQp3rdKd3L7fA-SE`
            }} style={{width:120, height:80,borderRadius:10}}/> 
            : <Image source={require('../../../assets/placeholder.png')} style={{width:130, height:110,borderRadius:10}}/>}

            <Text numberOfLines={2 } style={{fontSize:18,fontFamily: 'bold',marginBottom:10}}>{place?.displayName?.text}</Text>
            <Text numberOfLines={2} style={{fontSize: 18,marginBottom:10}}>{place?.formattedAddress}</Text>
            <View style={{display:'flex',alignItems:'center',gap:5,marginTop:5,flexDirection:'row',marginBottom:-5}}>
                <AntDesign name="star" size={20} color={Colors.yellow} />
                <Text>{place?.rating}</Text>
            </View>
    </View>
  )
}

export default BusinessItem