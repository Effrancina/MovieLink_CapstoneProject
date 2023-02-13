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
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#313d4a] flex-0.5 py-5 border-t-4" >
        <View className="flex-row justify-around items-center ">
        <TouchableOpacity onPress={() => {
          navigation.navigate('Region Select Screen')}}>
            <HomeIcon size={40} color="white"></HomeIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Search Movie Screen')
              }}>
            <MagnifyingGlassIcon size={40} color="white"></MagnifyingGlassIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Information Screen')
              }}>
            <InformationCircleIcon size={40} color="white"></InformationCircleIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              }}>
            <UserIcon size={40} color="white"></UserIcon>
        </TouchableOpacity>
            
        </View>
      </View>
  )
}

export default Footer;