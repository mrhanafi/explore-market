import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

const PlaceMarker = ({item}) => {
  return (
    <Marker title={item?.displayName.text} coordinate={{
        latitude: item?.location.latitude,
        longitude:item?.location.longitude,
        latitudeDelta:0.0522,
        longitudeDelta:0.0421
    } } /> 
  )
}

export default PlaceMarker