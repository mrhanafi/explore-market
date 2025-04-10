import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PlaceDetailsItem from './PlaceDetailsItem';
import Colors from '../../Shared/Colors';

const PlaceDetails = () => {
    const param = useRoute().params;
    const [place,setPlace] = useState([]);

    useEffect(()=> {
        setPlace(param.place);
    },[]);
  return (
    <View style={{padding:20,backgroundColor:Colors.white, flex:1}}>
      <PlaceDetailsItem place={place} />
    </View>
  )
}

export default PlaceDetails