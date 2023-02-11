import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="flex-row justify-center">

                    <View className="flex-row justify-center">

                        <MaterialCommunityIcons name="movie-roll" size={100} color="white" />
                    </View>
                    <Text className="font-bold text-5xl my-9 text-white " >
                        MovieLink
                    </Text>
                </View>
  )
}

export default Header