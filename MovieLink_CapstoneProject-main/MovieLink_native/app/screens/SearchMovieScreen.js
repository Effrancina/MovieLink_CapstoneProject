import React, { useLayoutEffect, useMemo, PureComponent } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SearchIcon,
  TextInput,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import { getAllMovies } from "../services/MovieServices";
import { SearchBar } from "react-native-elements";
import {
  posterName,
  removePosterProfile,
  makeRegions,
} from "../components/Useful";




class MovieItem extends PureComponent {
  render() {
    
    const { movie, region,navigation } = this.props;
    return (
      <TouchableOpacity className="flex-row bg-[#313d4a] mx-3 my-1 rounded-lg"
      onPress={() =>
        navigation.navigate("Single Movie Screen", { id: movie.id })
      }>
        <Image
          source={{
            uri:
              "https://images.justwatch.com" +
              removePosterProfile(movie.poster) +
              "s592/" +
              posterName(movie.title) +
              ".webp",
          }}
          className="h-52 w-36"
          accessibilityLabel="movie poster"
          ></Image>
        <View className=" mt-12 mb-7 flex-1 mr-2">
          <View>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
              >
              {movie.title}
            </Text>

            <Text className="text-white mt-2 text-lg text-center">
              IMDB Score: {movie.score}
            </Text>
            
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const SearchMovieScreen = () => {
  const [search, setSearch] = useState("");
  const [justMovieTitle, setJustMovieTitle] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingDots, setLoadingDots] = useState("");
 
  const [region, setRegion] = useState([]);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [movieRegions, setMovieRegions] = useState({});
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getAllMovies(setMovies);
  }, []);

  useEffect(() => {
    makeMovieObject();
  }, [movies]);

  useEffect(() => {
    if (currentItemId && movies.length > 0) {
      makeRegions(movies[currentItemId - 1], setRegion, region);
    }
  }, [movies, currentItemId]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateLoadingDots();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function makeMovieObject() {
    const newMovieObject = movies.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
      };
    });
    setJustMovieTitle(newMovieObject);
    setFilteredMovies(newMovieObject);

    if (movies.length > 0) {
      setIsLoading(false);
    }
  }

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = justMovieTitle.filter(function (item) {
        const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredMovies(newData);
      setSearch(text);
    } else {
      setFilteredMovies(justMovieTitle);
      setSearch(text);
    }
  };

  const updateLoadingDots = () => {
    setLoadingDots((prevDots) => {
      if (prevDots === "...") {
        return ".";
      } else {
        return prevDots + ".";
      }
    });
  };
  

  return (
    <View className="flex-1 bg-black">
      <View className="flex-1 mt-8">
        <Header></Header>

        <SearchBar
          searchIcon={{ size: 24, color: "black" }}
          containerStyle={{
            backgroundColor: "#B9AEE0",
            borderRadius: 20,
            margin: 12,
          }}
          inputContainerStyle={{ backgroundColor: "#B9AEE0" }}
          inputStyle={{ fontWeight: "bold", color: "black" }}
          placeholderTextColor="black"
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          placeholder="Type Here..."
          value={search}
        />

        {isLoading ? (
          <View className="justify-center mt-20 mx-16">
            <Image
              source={{
                uri: "https://counseling.northwestern.edu/wp-content/uploads/sites/83/2021/02/Hero.png?w=769",
              }}
              className="h-44 w-72 rounded-md "
              accessibilityLabel="Movie poster"
            ></Image>
            <Text className="text-white text-xl my-2 mx-4">
              Loading{loadingDots}
            </Text>
          </View>
        ) : (
          
          <FlatList
            className="bg-black text-white my-3"
            data={filteredMovies}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              setCurrentItemId(item.id);
              return (
                <MovieItem
                  movie={movies[item.id - 1]}
                  region={region[item.id - 1]}
                  navigation={navigation}
                />
              );
            }}
          />
        
        )}
      </View>
      <Footer></Footer>
    </View>
  );
};

export default SearchMovieScreen;