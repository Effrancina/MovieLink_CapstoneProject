import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { getAllRegions } from "../services/RegionServices";
import { SelectList } from "react-native-dropdown-select-list";

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
    <View className="bg-[#365678] font-bold flex-1 justify-center item-center ">
      <MaterialCommunityIcons name="movie-roll" size={40} color="black" />
      <Text className="font-bold text-lg my-10 text-white" style={styles.title}>
        MovieLink
      </Text>
      <StatusBar style="auto" className="text-white" />
      <Text className="text-lg my-10 text-white font-bold text-center">
        {" "}
        Select Your Country Below
      </Text>
      <View>

      <SelectList
        boxStyles={{backgroundColor:"red"}}
        dropdownTextStyles={{color:"white",fontWeight:"bold"}}
        className="text-black text-center"
        setSelected={(val) => setSelected(val)}
        data={justRegions}
        save="key"
        />
        </View>
        <View>

      <SelectList
        className="text-black text-center"
        setSelected={(val) => setSelected2(val)}
        data={justRegions}
        save="key"
        />
        </View>
      <TouchableOpacity
        className="rounded-lg bg-[#62DFB7]"
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
