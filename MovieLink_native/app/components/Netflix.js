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
          uri: "https://about.netflix.com/images/meta/netflix-symbol-black.png",
        }}
        className="h-16 w-16"
        accessibilityLabel="netflix logo"
        ></Image>
  </TouchableOpacity>
  )
}

export default Netflix