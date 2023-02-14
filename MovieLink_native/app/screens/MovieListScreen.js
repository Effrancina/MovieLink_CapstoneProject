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
} from "../services/MovieServices";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    getMoviesRegion1(setMovies1, id1);
    getMoviesRegion2(setMovies2, id2);
  }, []);

  useEffect(() => {
    if (movies1.length > 0 && movies2.length > 0) {
      const movie1Ids = movies1.map((movie) => {
        return movie.id;
      });
      const moviesToFind = movies2.filter((movie) =>
        movie1Ids.includes(movie.id)
      );
      setMoviesFound(moviesToFind);
    }
  }, [movies2, movies1]);

  return (
    <View className="bg-[#19232E] font-bold justify-around">
      <View className="mt-24 ">
        <Header></Header>

        <StatusBar style="auto" />

        <Text className="text-lg my-5 text-white font-bold text-center">
          We found these Movies for you!
        </Text>

        <View className="pb-100 pl-4">
          <FlatList
            contentContainerStyle={{ paddingBottom: 400 }}
            data={moviesFound}
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
                      Platform: {itemData.item.regions[0].platform}
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
