import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import GoogleMapViewFull from '../Components/Search/GoogleMapViewFull'
import SearchBar from '../Components/Search/SearchBar'
import { UserLocationContext } from '../Context/UserLocationContext'
import GlobalApi from '../Services/GlobalApi'
import BusinessList from '../Components/Search/BusinessList'

const Search = () => {
  const [placeList,setPlaceList] = useState([]);
  const {location,setLocation} = useContext(UserLocationContext);

  useEffect(() => {
      GetNearbySearchPlace('restaurant')
    
  },[])
  const GetNearbySearchPlace = (value) => {
    GlobalApi.searchByText(value).then(resp => {
      // console.log(resp);
      setPlaceList(resp.data.places)
    })
  }
  return (
    <View>
      <View style={{position:'absolute',zIndex:20}}>

      <SearchBar/>
      </View>
      <GoogleMapViewFull placeList={placeList} />
      <View style={{position:'absolute',zIndex:20,bottom:0,paddingBottom:95}}>
        <BusinessList placeList={placeList} />

      </View>
    </View>
  )
}

export default Search