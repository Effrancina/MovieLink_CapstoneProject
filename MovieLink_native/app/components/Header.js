import { View, Text } from 'react-native'
import React from 'react'
import Icon from './Icon';

const Header = () => {
  return (
    <View className="justify-center items-center">

                    <View className="justify-center">

                        <Icon></Icon>
                    </View>
                    <Text className="font-bold text-4xl mt-7 text-white " >
                        MovieLink
                    </Text>
                </View>
  )
}

export default Header