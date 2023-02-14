import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

import DropDownMenu from "../components/DropDownMenu";
import { getAllRegions, getRegionById } from "../services/RegionServices";

const FilterScreen = (props) => {
  const navigation = useNavigation();
  const { id1, id2 } = props.route.params;
  const [justPlatforms, setJustPlatforms] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [regions, setRegions] = useState([]);
  const [region1, setRegion1] = useState([]);
  const [region2, setRegion2] = useState([]);

  useEffect(() => {
    getAllRegions(setRegions);
    getRegionById(setRegion1,id1)
    getRegionById(setRegion2,id2)
}, []);

useEffect(() => {
    makeObject();

  }, [regions]);

  function makeObject() {
    const newObject = regions.map((region) => {
      return {
        key: region.id,
        value: region.platform,
      };
    });
    setJustPlatforms(newObject);
    
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className="flex-1 bg-black">
      <View className="mt-8 flex-1 items-center">
        <Header></Header>
        <Text className="text-white font-bold text-xl mb-10">
          Choose your Providers Below
        </Text>
        <Text className="text-white font-bold text-lg my-5">
            Choose your Providers for {region1.regionName}
        </Text>
        <DropDownMenu
          justData={justPlatforms}
          setSelected={setSelected}
        ></DropDownMenu>
        <Text className="text-white font-bold text-lg my-5">
            Choose your Providers for {region2.regionName}
        </Text>
        <DropDownMenu
          justData={justPlatforms}
          setSelected={setSelected2}
        ></DropDownMenu>
        <TouchableOpacity
          className="rounded-lg bg-[#62DFB7] p-3 w-60 mt-10 "
          onPress={() =>
            navigation.navigate("Movie List", { id1: id1, id2: id2 })
          }
        >
          <Text className="text-center text-black text-lg font-bold">
            See Movies!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-lg bg-[#62DFB7] p-3 w-60 mt-10 "
          onPress={() =>
            navigation.navigate("Random Movie Screen", { id1: id1, id2: id2 })
          }
        >
          <Text className="text-center text-black text-lg font-bold">
            Lucky Dip!
          </Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </View>
  );
};

export default FilterScreen;
