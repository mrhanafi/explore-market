import { View, Text, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserLocationContext } from '../../Context/UserLocationContext';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import PlaceMarker from '../Home/PlaceMarker'

const GoogleMapViewFull = ({placeList}) => {
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
        },[location]);
  return (
    <View>
      {location ? <MapView
        style={{
            width:Dimensions.get('screen').width,
            height: Dimensions.get('screen').height,
            borderRadius:20,
            // marginTop:60
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
        >
            <Marker title='You' coordinate={mapRegion} />
            {placeList?.map((item,index)=>index<=5&&(
                <PlaceMarker key={index} item={item}/>
            ))}
        </MapView> : null}
    </View>
  )
}

export default GoogleMapViewFull