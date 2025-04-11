import { View, Text, TouchableOpacity, Platform, Linking, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PlaceDetailsItem from './PlaceDetailsItem';
import Colors from '../../Shared/Colors';
import GoogleMapView from '../Home/GoogleMapView';

const PlaceDetails = () => {
    const param = useRoute().params;
    const [place,setPlace] = useState([]);

    useEffect(()=> {
        setPlace(param.place);
        console.log(place);
    },[]);

    const onDirectionClick = () => {
      const url = Platform.select({
        ios:"map:"+place?.location.latitude + "," + place?.location.longitude + "?q="+place.formattedAddress,
        android:"geo:"+place?.location.latitude + "," + place?.location.longitude + "?q="+place.formattedAddress,
      });
      Linking.openURL(url)
    }
  return (
    <ScrollView style={{padding:20,backgroundColor:Colors.white, flex:1}}>
      <PlaceDetailsItem place={place} onDirectionClick={()=>onDirectionClick()} />
      <GoogleMapView placeList={[place]} />
      <TouchableOpacity style={{backgroundColor:Colors.gray,padding:15,alignContent:'center',alignItems:'center',margin:8,borderRadius:50}}
      onPress={() => onDirectionClick()}
      >
        <Text style={{fontFamily:'regular',textAlign:'center',color:Colors.black}}>Get Direction on Map</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default PlaceDetails