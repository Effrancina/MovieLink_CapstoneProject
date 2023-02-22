import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

import DropDownMenu from "../components/DropDownMenu";
import { getAllRegions, getRegionById } from "../services/RegionServices";
import MultipleDropDownMenu from "../components/MultipleDropDownMenu";
import Netflix from "../components/Netflix";
import AmazonPrime from "../components/AmazonPrime";
import DisneyPlus from "../components/DisneyPlus";

const FilterScreen = (props) => {
  const navigation = useNavigation();
  const { id1, id2 } = props.route.params;
  const [justPlatforms, setJustPlatforms] = useState([]);
  const [selected, setSelected] = useState([]);//first platform list
  const [selected2, setSelected2] = useState([]);//second platform list
  const [regions, setRegions] = useState([]);//all regions
  const [region1, setRegion1] = useState([]);//first choice
  const [region2, setRegion2] = useState([]);//second choice
  const [platformList1, setPlatformList1] = useState([]);//sent through
  const [platformList2, setPlatformList2] = useState([]);// seng through

 

  const calculateRegionId = () => {
    const platformListA = selected.map(id => {
        return {"region":  id+ id1-1}
    })
    
    setPlatformList1(platformListA)
    const platformListB = selected2.map(id => id+ id2-1)
    setPlatformList2(platformListB)
  }


  useEffect(() => {
    getAllRegions(setRegions);
    getRegionById(setRegion1, id1);
    getRegionById(setRegion2, id2);
  }, []);

  useEffect(() => {
    makeObject();
    
  }, [regions]);

  useEffect(() => {
    calculateRegionId()
  }, [selected,selected2]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  function makeObject() {
    const newObject = regions.map((region) => {
      return {
        key: region.id,
        value: region.platform,
      };
    });
    const platformsToShow = [];
    const platformTracker = [];
    newObject.forEach((platform) => {
        if (!platformTracker.includes(platform.value)){
            platformsToShow.push(platform);
            platformTracker.push(platform.value);
        }
    })
    setJustPlatforms(platformsToShow);
  };


  return (
    <View className="flex-1 bg-black">
      <ScrollView className="mt-8">
        <View className="flex-1 items-center">
          <Header></Header>

          <Text className="text-white font-bold text-lg my-5">
            Choose your Providers for {region1.regionName}
          </Text>
          <MultipleDropDownMenu
            justData={justPlatforms}
            setSelected={setSelected}
          ></MultipleDropDownMenu>
          <Text className="text-white font-bold text-lg my-5">
            Choose your Providers for {region2.regionName}
          </Text>
          <MultipleDropDownMenu
            justData={justPlatforms}
            setSelected={setSelected2}
          ></MultipleDropDownMenu>
          <TouchableOpacity
            className="rounded-lg bg-[#62DFB7] p-3 w-60 mt-10 "
            onPress={() =>
 
                navigation.navigate("Movie List", { region1id:id1,region2id:id2,provider1ids:selected,provider2ids:selected2 })
            }
            >
            <Text className="text-center text-black text-lg font-bold">
                See Movies!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="rounded-lg bg-[#62DFB7] p-3 w-60 mt-10 mb-7 "
            onPress={() =>
                navigation.navigate("Random Movie Screen", { id1: id1, id2: id2 })
            }
            >
            <Text className="text-center text-black text-lg font-bold">
              Lucky Dip!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer></Footer>
    </View>
  );
};

export default FilterScreen;
