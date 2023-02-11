import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    HomeIcon,
    InformationCircleIcon
  } from "react-native-heroicons/outline";

const Footer = () => {
  return (
    <View className="bg-[#313d4a] flex-0.5 py-5 border-t-4" >
        <View className="flex-row justify-around items-center ">

        <TouchableOpacity>
            <HomeIcon size={40} color="white"></HomeIcon>
        </TouchableOpacity>
        <TouchableOpacity>
            <MagnifyingGlassIcon size={40} color="white"></MagnifyingGlassIcon>
        </TouchableOpacity>
        <TouchableOpacity>
            <InformationCircleIcon size={40} color="white"></InformationCircleIcon>
        </TouchableOpacity>
        <TouchableOpacity>
            <UserIcon size={40} color="white"></UserIcon>
        </TouchableOpacity>
            
        </View>
      </View>
  )
}

export default Footer