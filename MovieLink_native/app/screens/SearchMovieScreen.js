
import React, { useLayoutEffect } from "react";
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
FlatList
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import {getAllMovies} from "../services/MovieServices";
import {SearchBar} from "react-native-elements"



const SearchMovieScreen = () => {
  const [search, setSearch] = useState('');
  const [justMovieTitle, setJustMovieTitle] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);


  const navigation = useNavigation();


useLayoutEffect(() => {
navigation.setOptions({
headerShown: false,
});
});

useEffect(() => {
  getAllMovies(setMovies)

}, []);

useEffect(() => {
  makeMovieObject()

}, [movies]);

// function movieTitle (movie, index) {
//   return movie[index].title
// }
// console.log(movies)

function makeMovieObject() {
  const newMovieObject = movies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
    };
  });
  setJustMovieTitle(newMovieObject);
  setFilteredMovies(newMovieObject);
}

// const searchFilterFunction = (text) => {
//   if (text){
//     const newMovies = justMovieTitle.filter(movie =>{
//       console.log(movie)
//       return movie.title
//     })
//   } else{
//     setFilteredMovies(justMovieTitle);
//   }
// }
const searchFilterFunction = (text) => {

  if (text) {
    const newData = justMovieTitle.filter(function(item) {
      const itemData = item.title
      ? item.title.toUpperCase()
      : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) >-1;
    });
    setFilteredMovies(newData);
    setSearch(text);
  } else{
    setFilteredMovies(justMovieTitle);
    setSearch(text);
  }
}

const ItemView = ({ item }) => {
  return (
    // Flat List Item
    <Text onPress={() => getItem(item)}>
      {item.title.toUpperCase()}
    </Text>
  );
};
const getItem = (item) => {
  // Function for click on an item
  alert(' Title : ' + item.title);
};


return (
<View className="flex-1 bg-black">
  <View className="mt-8 flex-1">
      <Header></Header>
      {/* <View className="flex-row items-center space-x-2 pb-2 mx-4"> */}
          {/* <View className="flex-2 space-x-2 bg-purple p-3 justify-around pb-20"> */}

            <SearchBar
              searchIcon={{ size: 24,color:"black" }}
              containerStyle={{backgroundColor: "#B9AEE0", borderRadius:20,margin:12}}
              inputContainerStyle={{backgroundColor: "#B9AEE0"}}
              inputStyle = {{fontWeight: "bold", color:"black"}}
              placeholderTextColor="black"
              onChangeText={(text) => searchFilterFunction(text)}
              onClear={(text) => searchFilterFunction('')}
              placeholder="Type Here..."
              value={search}
            />
            <FlatList
              className=" bg-black text-white my-3"
              data={filteredMovies}
              keyExtractor={(item, index) => index.toString()}
              renderItem={(ItemView)=>{
                return <View className="bg-[#313d4a] mx-3 my-1 rounded-lg">
                  <Text className="text-white text-xl my-2 mx-4">
                    {ItemView.item.title}
                  </Text>
                </View>
              }}
              
            />
          {/* </View> */}
  <Footer></Footer>
  </View>
</View>

);
};

export default SearchMovieScreen;