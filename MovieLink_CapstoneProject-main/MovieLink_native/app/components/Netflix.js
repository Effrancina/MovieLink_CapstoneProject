import { View, Text, Image,TouchableOpacity, Linking } from 'react-native'
import React from 'react'


const Netflix = () => {
  return (
    <TouchableOpacity
    className= "mx-3"
    onPress={() => Linking.openURL("http://www.netflix.com/gb/")}
    >
    <Image
      source={{
          uri: "https://static.vecteezy.com/system/resources/previews/017/396/804/original/netflix-mobile-application-logo-free-png.png",
        }}
        className="h-16 w-16"
        accessibilityLabel="netflix logo"
        ></Image>
  </TouchableOpacity>
  )
}

export default Netflix