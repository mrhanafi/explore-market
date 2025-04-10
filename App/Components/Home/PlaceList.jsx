import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { useNavigation } from '@react-navigation/native'

const PlaceList = ({placeList}) => {
    // console.log('placelist',placeList)
    const navigate = useNavigation();
    const onPlaceClick = (item) => {
        navigate.navigate('place-details',{place:item})
    }
  return (
    <View>
      <Text style={{fontSize: 20, fontFamily: 'bold', marginTop: 10}}>Found {placeList.length} Places</Text>

      <FlatList 
      data={placeList}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onPlaceClick(item)}>
            <PlaceItem place={item}/>

        </TouchableOpacity>
      )}
      style={{marginVertical: 15}}
      />
    </View>
  )
}

export default PlaceList