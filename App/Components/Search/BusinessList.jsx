import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../Shared/Colors'
import BusinessItem from './BusinessItem'
import { useNavigation } from '@react-navigation/native'

const BusinessList = ({placeList}) => {
    const navigate = useNavigation();
    const onPlaceClick = (item) => {
        navigate.navigate('place-details',{place:item})
    }
  return (
    <View>
      <LinearGradient colors={['transparent',Colors.white]}
              style={{paddingHorizontal:20,paddingTop: 40,width:Dimensions.get('screen').width}}>
        <FlatList 
        data={placeList}
        horizontal={true}
        renderItem={({item,index}) => index<=6&&(
            <TouchableOpacity onPress={() => onPlaceClick(item)}>
                <BusinessItem place={item}/>

            </TouchableOpacity>
        )}
        />
      </LinearGradient>
    </View>
  )
}

export default BusinessList