import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAllRegions } from "../services/RegionServices";


import Header from "../components/Header";
import DropDownMenu from "../components/DropDownMenu";
import Footer from "../components/Footer";

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
    getAllRegions(setRegions)
      
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

    const regionsToShow = [];
    const regionTracker = [];

    newObject.forEach((region) => {
      if (!regionTracker.includes(region.value)) {
        regionsToShow.push(region);
        regionTracker.push(region.value);
      }
   
    })
  
    setJustRegions(regionsToShow);

  }


  
  return (
    <View className="bg-[#19232E] font-bold flex-1">
      <ScrollView className="mt-10">

        <Header></Header>

        <StatusBar style="auto" className="text-white" />
        <Text className="text-lg mt-9 text-white font-bold text-center">
          Select Your Regions Below
        </Text>

        <DropDownMenu justData={justRegions} setSelected={setSelected}></DropDownMenu>
        <DropDownMenu justData={justRegions} setSelected={setSelected2}></DropDownMenu>


        <View className="flex-row justify-center border-white">
          <TouchableOpacity
            className="rounded-lg bg-[#62DFB7] p-3 w-60 mt-5 "
            onPress={() =>
              navigation.navigate("Filter Screen", { id1: selected, id2: selected2 })
            }
            
          >
            <Text className="text-center text-black text-lg font-bold">
              Get Available Movies
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-20">
          <Image
            source={{uri:"https://counseling.northwestern.edu/wp-content/uploads/sites/83/2021/02/Hero.png?w=769"}}
            className="h-44 w-72 rounded-md"
            accessibilityLabel="Movie poster">
          </Image>
        </View>
      </ScrollView>
      <Footer></Footer>
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
