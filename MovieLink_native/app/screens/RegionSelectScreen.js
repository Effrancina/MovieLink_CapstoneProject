import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { getAllRegions } from "../services/RegionServices";
import { SelectList } from "react-native-dropdown-select-list";

const RegionSelectScreen = () => {
  const [regions, setRegions] = useState([]);
  const [selected, setSelected] = useState([]);
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

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <MaterialCommunityIcons name="movie-roll" size={40} color="black" />
      <Text style={styles.title}>MovieLink</Text>
      <StatusBar style="auto" />
      <View>
        <FlatList
          data={regions}
          renderItem={(itemData) => {
            return (
              <View>
                <Text>{itemData.item.regionName}</Text>
              </View>
            );
          }}
          alwaysBounceVertical={false}
        ></FlatList>
         {/* <SelectList setSelected={setSelected} data={regions} onSelect={() => alert(selected)} /> */}
      </View>
    </SafeAreaView>
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
