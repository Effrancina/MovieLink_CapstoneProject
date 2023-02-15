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

// import Icon from 'react-native-vector-icons/FontAwesome5';
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
  getMoviesRegion1,
  getMoviesRegion2,
  getRandomMovie,
} from "../services/MovieServices";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RandomMovieScreen = ({ route }) => {
  const [movie, setMovie] = useState([]);
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
      


  }, [movie]);

  return (
    <View className="bg-[#19232E] font-bold flex-1">
      <View className="mt-8 flex-1">
        <Header></Header>

        <StatusBar style="auto" />

        <Text className="text-lg my-5 text-white font-bold text-center">
          He's a random movie for you to enjoy!
        </Text>

        <View className="pb-100  items-center">
          <Text className="text-white font-bold text-3xl text-center">{movie.title}</Text>
          <Image
            source={{
              uri: "https://images.justwatch.com"+movie.poster
            }}
            className="h-96 w-60"
            accessibilityLabel="movie poster"
          ></Image>
          <TouchableOpacity
            className="rounded-lg bg-[#62DFB7] p-3 w-60 mt-10 "
            onPress={() => getRandomMovie(setMovie)

            }
          >
            <Text className="text-center text-black text-lg font-bold">
              Lucky Dip!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer></Footer>
    </View>
  );
};

export default RandomMovieScreen;
