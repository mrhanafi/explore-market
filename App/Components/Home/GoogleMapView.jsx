import { View, Text, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { UserLocationContext } from '../../Context/UserLocationContext'
import PlaceMarker from './PlaceMarker'

const GoogleMapView = ({placeList}) => {
    const {location,setLocation} = useContext(UserLocationContext);
    console.log("location:",location); 
    // const [mapRegion,setMapRegion] = useState([])
    const [mapRegion,setMapRegion] = useState({
        latitude: 3.2224554,
        longitude:101.6934002,
        latitudeDelta:0.0522,
        longitudeDelta:0.0421
    });


    useEffect(() => {
        if(location){
            setMapRegion({
                latitude: location?.coords.latitude,
                longitude:location?.coords.longitude,
                latitudeDelta:0.0522,
                longitudeDelta:0.0421
            })
        }
    },[]);
  return (
    <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20, marginBottom:10, fontFamily: 'bold'}}>
                Top Near By Places
            </Text>
        <View style={{marginTop: 20,borderRadius:20,overflow:'hidden'}}>
        <MapView
        style={{
            width:Dimensions.get('screen').width * 0.89,
            height: Dimensions.get('screen').height*0.23,
            borderRadius:20
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
        >
            <Marker title='You' coordinate={mapRegion} />
            {placeList?.map((item,index)=>index<=5&&(
                <PlaceMarker key={index} item={item}/>
            ))}
        </MapView>
        </View>

    </View>
  )
}

export default GoogleMapView