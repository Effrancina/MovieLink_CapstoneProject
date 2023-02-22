import { View, Text, Image,TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const Icon = () => {
  return (
    
     <Image
     source={require('./newIcon.png')}


         className="h-16 w-24"
         accessibilityLabel="amazon prime logo"
         ></Image>
   
  )
}

export default Icon;