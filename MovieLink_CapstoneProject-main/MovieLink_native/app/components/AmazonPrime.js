import { View, Text, Image,TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const AmazonPrime = () => {
  return (
    <TouchableOpacity
    className= "mx-3"
     onPress={() => Linking.openURL("http://www.amazon.co.uk/Amazon-Video/b?ie=UTF8&node=3010085031")}
     >
     <Image
       source={{
           uri: "http://store-images.s-microsoft.com/image/apps.32357.14618985536919905.4b30e4f3-f7a1-4421-840c-2cc97b10e8e0.6e7a96f1-33ad-4447-8e2b-7de730f9a05e",
         }}
         className="h-16 w-16"
         accessibilityLabel="amazon prime logo"
         ></Image>
   </TouchableOpacity>
  )
}

export default AmazonPrime