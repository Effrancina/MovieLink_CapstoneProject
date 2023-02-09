import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView,Button } from "react-native";
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
    
    useEffect(()=>{
        
        makeObject()
    },[regions])
    
    function makeObject() {
      
    const newObject = regions.map((region)=>{
        return{
            key:region.id,
            value:region.regionName
        }
    })
    setJustRegions(newObject)
    
  }

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text> Select Your Country Below</Text>
         <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={justRegions} 
        save="key"
        />
        <Button
        title="Get Available Movies"
        onPress={() => navigation.navigate('Movie List',{id:selected})}
        selected = {selected}
      />
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
