import { Share } from "react-native"

 const sharePlace = (place) => {
    Share.share({
        title:'Share Market',
        message:'Business Name: '+place?.displayName.text+"\n"+"Address: "+place?.formattedAddress
    })
 }

 export default {
    sharePlace
 }