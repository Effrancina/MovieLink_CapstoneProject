import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { getAllRegions } from "../services/RegionServices";
import { SelectList } from "react-native-dropdown-select-list";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const RegionSelectScreen = () => {
  const [regions, setRegions] = useState([]);
  const [justRegions, setJustRegions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selected2, setSelected2] = useState([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getAllRegions()
      .then((regionsData) => setRegions(regionsData))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    makeObject();
  }, [regions]);

  function makeObject() {
    const newObject = regions.map((region) => {
      return {
        key: region.id,
        value: region.regionName,
      };
    });
    setJustRegions(newObject);
  }

  return (
    <View className="bg-[#19232E] font-bold flex-1">
      <ScrollView className="mt-10">

        <View className="flex-row justify-center">

          <View className="flex-row justify-center">

            <MaterialCommunityIcons name="movie-roll" size={100} color="white" />
          </View>
          <Text className="font-bold text-5xl my-9 text-white " >
            MovieLink
          </Text>
        </View>

        <StatusBar style="auto" className="text-white" />
        <Text className="text-lg my-10 text-white font-bold text-center">
          {" "}
          Select Your Country Below
        </Text>

        <View className="p-3">
        <SelectList
            boxStyles={{ backgroundColor: "#B9AEE0" }}
            dropdownTextStyles={{ color: "black", fontWeight: "bold", fontSize: 16 }}
            dropdownItemStyles={{ backgroundColor: "#B9AEE0" }}
            inputStyles={{ fontWeight: "bold" }}
            className="text-black text-center"
            setSelected={(val) => setSelected(val)}
            data={justRegions}
            save="key"
          />
        </View>

        <View className="p-3">
          <SelectList
            boxStyles={{ backgroundColor: "#B9AEE0" }}
            dropdownTextStyles={{ color: "black", fontWeight: "bold", fontSize: 16 }}
            dropdownItemStyles={{ backgroundColor: "#B9AEE0" }}
            inputStyles={{ fontWeight: "bold" }}
            className="text-black text-center"
            setSelected={(val) => setSelected(val)}
            data={justRegions}
            save="key"
          />
        </View>

        <View className="flex-row justify-center border-white">
          <TouchableOpacity
            className="rounded-lg bg-[#62DFB7] p-3 w-60 "
            onPress={() =>
              navigation.navigate("Movie List", { id1: selected, id2: selected2 })
            }
            selected={selected}
          >
            <Text className="text-center text-black text-lg font-bold">
              Get Available Movies
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-10">
          <Image
            source={{uri:"https://counseling.northwestern.edu/wp-content/uploads/sites/83/2021/02/Hero.png?w=769"}}
            className="h-32 w-60"
            accessibilityLabel="Movie poster">
          </Image>
        </View>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  // container: {
  // flex: 1,
  // backgroundColor: '#fff',
  // alignItems: 'center',
  // justifyContent: 'center',
  // },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RegionSelectScreen;
