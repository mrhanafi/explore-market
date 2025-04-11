import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Share from '../../Services/Share';

const PlaceDetailsItem = ({place,onDirectionClick}) => {
  return (
    <View>
      <Text style={{fontSize:26,fontFamily:'bold'}}>{place?.displayName?.text}</Text>
      <View style={{display:'flex',alignItems:'center',gap:5,marginTop:5,flexDirection:'row'}}>
        <AntDesign name="star" size={20} color={Colors.yellow} />
        <Text>{place?.rating}</Text>
      </View>
      {place?.photos ? (
        <Image source={{uri:"https://places.googleapis.com/v1/"+
          `${place?.photos[0]?.name}/media`+
          "?maxWidthPx=400&maxHeightPx=400"+
          `&key=AIzaSyB5m_w8mVAD1YeLIrrEQp3rdKd3L7fA-SE`
        }} style={{width:'100%', height:160,borderRadius:15,marginTop: 10}} />
      ) : null}

      <Text style={{fontSize:16, marginTop:10,color:Colors.black}} numberOfLines={2}>{place?.formattedAddress}</Text>
      {place?.regularOpeningHours ? (
        <Text style={{fontFamily: 'regular'}}>
          {place?.regularOpeningHours?.openNow === true ? '(Open)' : '(Closed)'}
        </Text>
      ):null}
      <View style={{marginTop: 10, flexDirection:'row',display:'flex',gap:10}}>
        <TouchableOpacity onPress={() => onDirectionClick()} style={{
          direction:'flex',
          flexDirection:'row',
          alignItems:'center',
          gap:5,
          backgroundColor:Colors.gray,
          width:110,
          padding:3,
          borderRadius:40,
          justifyContent: 'center'

        }}>
          <Entypo name="direction" size={24} color="black" />
          <Text style={{fontFamily:'regular',fontSize:16 }}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Share.sharePlace(place)} style={{
          direction:'flex',
          flexDirection:'row',
          alignItems:'center',
          gap:5,
          backgroundColor:Colors.gray,
          width:110,
          padding:3,
          borderRadius:40,
          justifyContent: 'center'

        }}>
          <Entypo name="share" size={24} color="black" />
          <Text style={{fontFamily:'regular',fontSize:16 }}>Share</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default PlaceDetailsItem