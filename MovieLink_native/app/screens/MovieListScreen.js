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

import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { SelectList } from "react-native-dropdown-select-list";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import {
  getAllMovies,
  getMoviesRegion,
  getMoviesRegion2,
} from "../services/MovieServices";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MovieListScreen = ({ route }) => {
  const [movies, setMovies] = useState([]);
  
  const navigation = useNavigation();
  const { region1id,region2id,provider1ids,provider2ids } = route.params;
  const [moviesFound, setMoviesFound] = useState([]);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getMoviesRegion(setMovies, region1id,region2id,provider1ids,provider2ids );
    
  }, []);

  useEffect(() => {
    
   IMDBOrder()
    
  }, []);

  

  function makeAlphabetical(){
    const inOrder = movies.sort(function (a,b){
      let textA = a.title.toUpperCase();
      let textB = b.title.toUpperCase();
      return(textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      
    })
    setMovies([...inOrder])
   
}
  function IMDBOrder (){
    const inOrder = movies.sort(function (a,b){
        let scoreA = a.score;
        let scoreB = b.score;
        return(scoreA < scoreB) ? 1 : (scoreA > scoreB) ? -1 : 0;

    })
    setMovies([...inOrder])
}

  return (
    <View className="bg-[#19232E] font-bold flex-1">
      <View className="mt-12 flex-1">
        <Header></Header>
        

        <StatusBar style="auto" />

        <Text className="text-lg my-1 text-white font-bold text-center">
          We found these Movies for you!
        </Text>
        <View className="flex-row justify-center items-center mb-4">
        <TouchableOpacity
            className="rounded-lg bg-[#62DFB7] p-3 w-30 mt-1 mx-4"
            onPress={makeAlphabetical}
            >
            <Text className="text-center text-black text-lg font-bold">
                Alphabetical
            </Text>
          </TouchableOpacity>
        <TouchableOpacity
            className="rounded-lg bg-[#62DFB7] p-3 w-30 mt-1 mx-4"
            onPress={IMDBOrder}
            >
            <Text className="text-center text-black text-lg font-bold">
                IMDB Score
            </Text>
          </TouchableOpacity>
        </View>
        <View className="pl-4">
          <FlatList
            contentContainerStyle={{ paddingBottom: 200 }}
            data={movies}
            renderItem={(itemData) => {
              return (
                <View className="flex-row rounded-xl items-center mb-4 mr-3 bg-[#313d4a]">
                  <View className="pr-5 ">
                    <Image
                      source={{
                        uri: "https://images.justwatch.com/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp",
                      }}
                      className="h-48 w-28"
                      accessibilityLabel="movie poster"
                    ></Image>
                  </View>
                  <View className="  mb-5 flex-1 mr-2">
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          flex: 1,
                          fontSize: 20,
                          color: "white",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        {itemData.item.title}
                      </Text>
                    </View>
                    <Text className="text-white font-bold text-center">
                      Platforms: {itemData.item.regions[0].platform}
                    </Text>
                    <Text className="text-white font-bold text-center">
                      IMDB Score: {itemData.item.score}
                    </Text>
                  </View>
                </View>
              );
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
      <Footer></Footer>
    </View>
  );
};

export default MovieListScreen;
