
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
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";

const SearchMovieScreen = () => {

const navigation = useNavigation();

useLayoutEffect(() => {
navigation.setOptions({
headerShown: false,
});
});


return (
<View>
    <ScrollView className="mt-7">
        <Header></Header>
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-purple p-3">
                <SearchIcon color="purple" size={20}/>
                <TextInput 
                placeholder="Search movie title"
                keyboardType="default"
                />
            </View>
            <AdjustmentsHorizontalIcon color='#19232E'/>
        </View>
    </ScrollView>
    <Footer></Footer>
</View>

);
};

export default SearchMovieScreen;