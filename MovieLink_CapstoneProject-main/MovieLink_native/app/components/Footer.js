import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  UserIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  InformationCircleIcon
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#313d4a] border-t-4 py-3 fixed bottom-0 inset-x-0">
      <View className="flex flex-row justify-around items-center">
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate('Region Select Screen')}
        >
          <HomeIcon size={30} color="white" />
          <Text className="text-white">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate('Search Movie Screen')}
        >
          <MagnifyingGlassIcon size={30} color="white" />
          <Text className="text-white">Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate('Information Screen')}
        >
          <InformationCircleIcon size={30} color="white" />
          <Text className="text-white">App Info</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <UserIcon size={30} color="white" />
          <Text className="text-white">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
