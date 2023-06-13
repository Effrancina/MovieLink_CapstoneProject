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
import { posterName,removePosterProfile,makeRegions } from "../components/Useful";
import {
  getRandomMovie,
} from "../services/MovieServices";
import Header from "../components/Header";
import Footer from "../components/Footer";


const RandomMovieScreen = ({ route }) => {
  const [movie, setMovie] = useState("");
  const [region, setRegion] = useState([]);
  const navigation = useNavigation();
  const { id1, id2 } = route.params;
 

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getRandomMovie(setMovie);

}, []);

useEffect(() => {
      
  if(movie){makeRegions(movie,setRegion)}

  console.log(movie);
  }, [movie]);


  return (
    <View className="bg-[#19232E] font-bold flex-1">
      <ScrollView className="mt-8 flex-1">
        <Header></Header>

        <StatusBar style="auto" />

        <Text className="text-lg my-5 text-white font-bold text-center">
          Here's a random movie for you to enjoy!
        </Text>

        <View className="pb-100  items-center">
          <Text className="text-white font-bold text-3xl text-center">{movie.title}</Text>
          <Image
            source={{
              uri: "https://images.justwatch.com"+removePosterProfile(movie.poster)+ "s592/" + posterName(movie.title) + ".webp",
            }}
            className="h-80 w-56"
            accessibilityLabel="movie poster"
          ></Image>
          <Text className = "text-white mt-2 text-lg"> IMDB Score {movie.score}</Text>
          <View >
            {region}
          </View>
          <TouchableOpacity
            className="rounded-lg bg-[#62DFB7] p-3 w-60 mt-10 mb-4 "
            onPress={() => getRandomMovie(setMovie)}
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

export default RandomMovieScreen;