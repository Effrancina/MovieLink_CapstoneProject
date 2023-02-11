import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { getAllMovies } from "../services/MovieServices";

const MovieListScreen = ({ route }) => {
  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const navigation = useNavigation();
  const {id1,id2} = route.params;
  const [moviesFound, setMoviesFound] = useState([]);

  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
      fetch("http://192.168.0.54:8080/movies?region="+id1)
        .then (res => res.json())
        .then((moviesData) => setMovies1(moviesData))
        .catch((err) => console.error(err));

      fetch("http://192.168.0.54:8080/movies?region="+id2)
        .then (res => res.json())
        .then((moviesData) => setMovies2(moviesData))
        .catch((err) => console.error(err));
  }, []);

    


    useEffect(()=> {
        if (movies1.length>0 && movies2.length>0) {
        const movie1Ids = movies1.map((movie) => {
            return (movie.id)
        });
        const moviesToFind = movies2.filter(movie => movie1Ids.includes(movie.id))
        setMoviesFound(moviesToFind)
    }
    },[movies2, movies1])
    

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <MaterialCommunityIcons name="movie-roll" size={40} color="black" />
      <Text style={styles.title}>MovieLink</Text>
      <StatusBar style="auto" />
      
      <View>
        <FlatList
          data={moviesFound}
          renderItem={(itemData) => {
            return (
              <View>
                <Text>{itemData.item.title}</Text>
              </View>
            );
          }}
          alwaysBounceVertical={false}
        ></FlatList>
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

export default MovieListScreen;
