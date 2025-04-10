import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'
import GlobalApi from '../Services/GlobalApi'
import PlaceList from '../Components/Home/PlaceList'
import { UserLocationContext } from '../Context/UserLocationContext'

const Home = () => {
  const {location,setLocation} = useContext(UserLocationContext);
  const [placeList,setPlaceList] = useState([])

  useEffect(()=> {
    getNearbySearchPlace('restaurant');   
  },[]) 
  const getNearbySearchPlace = async (value) => {
    // console.log(value);
    await GlobalApi.nearbyPlaces(location?.coords?.latitude,location?.coords?.longitude,value )
    .then(resp => {
      // console.log('data',resp.data.places)
      setPlaceList(resp.data.places)
      // console.log(placeList)
    })
  }
  return (
    <ScrollView style={{padding: 20,marginTop:20}}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList setSelectedCategory={(value) =>getNearbySearchPlace(value)} />
      {placeList ? <PlaceList placeList={placeList}/> : null}
    </ScrollView>
  )
}

export default Home