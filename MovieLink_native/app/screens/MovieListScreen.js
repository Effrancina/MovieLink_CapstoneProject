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
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
import { getAllMovies } from "../services/MovieServices";

const MovieListScreen = ({ route }) => {
  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const navigation = useNavigation();
  const { id1, id2 } = route.params;
  const [moviesFound, setMoviesFound] = useState([]);



  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    fetch("http://192.168.0.43:8080/movies?region=" + id1)
      .then(res => res.json())
      .then((moviesData) => setMovies1(moviesData))
      .catch((err) => console.error(err));

    fetch("http://192.168.0.43:8080/movies?region=" + id2)
      .then(res => res.json())
      .then((moviesData) => setMovies2(moviesData))
      .catch((err) => console.error(err));
  }, []);




  useEffect(() => {
    if (movies1.length > 0 && movies2.length > 0) {
      const movie1Ids = movies1.map((movie) => {
        return (movie.id)
      });
      const moviesToFind = movies2.filter(movie => movie1Ids.includes(movie.id))
      setMoviesFound(moviesToFind)
    }
  }, [movies2, movies1])




  return (
    <View className="bg-[#19232E] font-bold flex-1">
      <View className="mt-10">

        <View className="flex-row justify-center">

          <View className="flex-row justify-center">

            <MaterialCommunityIcons name="movie-roll" size={100} color="white" />
          </View>
          <Text className="font-bold text-5xl my-9 text-white " >
            MovieLink
          </Text>
        </View>
        <StatusBar style="auto" />
        <Text className="text-lg my-5 text-white font-bold text-center">
          We found these Movies for you!
        </Text>
        <View className = "pb-100">
          <FlatList

            data={moviesFound}
            renderItem={(itemData) => {


              return (
                <View className="flex-row">
                  <View>
                    <Image
                      source={{ uri: "https://images.justwatch.com/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp" }}
                      className="h-48 w-28"
                      accessibilityLabel="movie poster">
                    </Image>
                  </View>
                  <View className="flex-3">
                    <Text className="text-white">{itemData.item.title}</Text>
                    <Text className="text-white">Description</Text>
                    <Text className="text-white">{itemData.item.regions[0].platform}</Text>
                  </View>
                </View>
              );
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
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

export default MovieListScreen;
