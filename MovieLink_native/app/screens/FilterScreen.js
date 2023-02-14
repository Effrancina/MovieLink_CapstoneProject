import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, View,Image } from 'react-native'
import Header from '../components/Header';
import { useNavigation } from "@react-navigation/native";
import Footer from '../components/Footer';
import { TouchableOpacity } from 'react-native-web';
import DropDownMenu from '../components/DropDownMenu';


const FilterScreen = (props) => {
  const navigation = useNavigation();
  const { id1, id2 } = props.route.params;
  const [justPlatforms, setJustPlatforms] = useState([]);

  useEffect(() => {
    getAllRegions(setRegions)
      
  }, []);

  function makeObject() {
    const newObject = regions.map((region) => {
      return {
        key: region.id,
        value: region.platform 
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
              <Text className="text-white font-bold text-xl">
                Choose your Providers Below
              </Text>
              <DropDownMenu justData={justPlatforms} setSelected={setSelected}></DropDownMenu>
        <DropDownMenu justData={justPlatforms} setSelected={setSelected}></DropDownMenu>
              <TouchableOpacity
            className="rounded-lg bg-[#62DFB7] p-3 w-60 mt-5 "
            onPress={() =>
              navigation.navigate("Movie List", { id1: id1, id2: id2 })
            }
            selected={selected}
          >
            <Text className="text-center text-black text-lg font-bold">
              Get Available Movies
            </Text>
          </TouchableOpacity>
              </View>
              <Footer></Footer>
              </View>
    )
  }

export default FilterScreen;
