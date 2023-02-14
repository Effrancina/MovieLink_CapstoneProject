import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="flex-row justify-center mr-5">

                    <View className="flex-row justify-center">

                        <MaterialCommunityIcons name="movie-roll" size={90} color="white" />
                    </View>
                    <Text className="font-bold text-4xl mt-7 text-white " >
                        MovieLink
                    </Text>
                </View>
  )
}

export default Header