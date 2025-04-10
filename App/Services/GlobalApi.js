import axios from "axios"

const BASE_URL = 'https://places.googleapis.com/v1/places:searchNearby'
export const API_KEY = 'AIzaSyB5m_w8mVAD1YeLIrrEQp3rdKd3L7fA-SE'

const nearbyPlaces = async (latitude,longitude,type) => await axios.post(BASE_URL,{
    "includedTypes": type,
    "maxResultCount": 5,
    "locationRestriction": {
        "circle": {
        "center": {
            "latitude": latitude,
            "longitude": longitude
        },
        "radius": 500.0
        }
    }
}, {
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key':API_KEY,
    //   'X-Goog-FieldMask':'places.displayName,places.types,places.photos'
      'X-Goog-FieldMask':'places.displayName,places.id,places.types,places.formattedAddress,places.photos,places.priceLevel,places.userRatingCount,places.rating,places.location'
      
    }
});

export default {
    nearbyPlaces
}