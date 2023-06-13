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
  import Netflix from "../components/Netflix";
import AmazonPrime from "../components/AmazonPrime";
import DisneyPlus from "../components/DisneyPlus";

export function posterName(movie) {
    if(movie&&movie.length>0){
    if (movie.includes(" ")) {
      return movie.toLowerCase().split(" ").join("-");
    } else {
      return movie.toLowerCase();
    }
  }
  }

  

  export function removePosterProfile(poster){
    if(poster&&poster.length>0){
    if (poster.includes("{profile}")) {
      return poster.replace("{profile}", "");
    }else{
      return poster;
    }
  }
  }


 export const makeRegions = (movie,setRegion) => {
//    console.log('movie',movie.regions)
    if (movie && movie.regions) {
      const uniqueRegions = Array.from(new Set(movie.regions.map((element) => element.regionName)));
  
      const newRegions = uniqueRegions.map((regionName) => {
        const platforms = movie.regions
          .filter((element) => element.regionName === regionName)
          .map((element) => element.platform);
  
        return (
          <View key={regionName} className="items-center">
            <View className="flex-row items-center my-1">
              <Text className="text-white mx-2"> {regionName}</Text>
              {platforms.includes("Netflix") && <Netflix></Netflix>}
              {platforms.includes("Amazon Prime") && <AmazonPrime></AmazonPrime>}
              {platforms.includes("Disney Plus") && <DisneyPlus></DisneyPlus>}
            </View>
          </View>
        );
      });
  
      setRegion(newRegions);
    }
  };

  export const makeRegions2 = (movie, setRegion,region) => {
    if (movie && movie.regions) {
      const uniqueRegions = Array.from(
        new Set(movie.regions.map((element) => element.regionName))
      );
  
      const newRegions = uniqueRegions.map((regionName, index) => {
        const platforms = movie.regions
          .filter((element) => element.regionName === regionName)
          .map((element) => element.platform);
  
          console.log('region',region)

        return (
            <View key={`${regionName}-${movie.id}-${index}`} className="items-center">

            <View className="flex-row items-center my-1">
              <Text className="text-white mx-2"> {regionName}</Text>
              {platforms.includes("Netflix") && <Netflix></Netflix>}
              {platforms.includes("Amazon Prime") && <AmazonPrime></AmazonPrime>}
              {platforms.includes("Disney Plus") && <DisneyPlus></DisneyPlus>}
            </View>
          </View>
        );
      });
  
      setRegion([...region,...newRegions]);
    } else {
      setRegion([]);
    }
  };