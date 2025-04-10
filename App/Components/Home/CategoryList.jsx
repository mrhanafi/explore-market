import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryList = ({setSelectedCategory}) => { 
    const categoryList = [
        // {
        //     id: 1,
        //     name: 'Gas Stations',
        //     value: 'gas_station',
        //     icon: require('../../../assets/gas-station.png')
        // },
        {
            id: 2,
            name: 'Restaurant',
            value: 'restaurant',
            icon: require('../../../assets/restaurant.png')
        },
        {
            id: 3,
            name: 'School',
            value: 'school',
            icon: require('../../../assets/school.png')
        },
        {
            id: 4,
            name: 'Cafe',
            value: 'cafe',
            icon: require('../../../assets/coffee.png')
        },
    ]
  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontSize: 20,fontFamily: 'bold'}}>Select Top Category</Text>
      <FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={categoryList}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
            <CategoryItem category={item}/>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default CategoryList