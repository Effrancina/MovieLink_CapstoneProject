import React, { useLayoutEffect } from 'react'
import { Text, View,Image } from 'react-native'
import Header from '../components/Header';
import { useNavigation } from "@react-navigation/native";
import Footer from '../components/Footer';


const InformationScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
    headerShown: false,
    });
    });
  
    return ( 
      
        <View className="flex-1 bg-black">
          <View className="mt-8 flex-1 items-center">
              <Header></Header>
              <Text className="text-white font-bold text-3xl">
                Welcome to our app
              </Text>
              <Image
                      source={{
                        uri: "https://counseling.northwestern.edu/wp-content/uploads/sites/83/2021/02/Hero.png?w=769",
                      }}
                      className="h-44 w-72 rounded-md"
                      accessibilityLabel="movie poster"
                    ></Image>
              </View>
              <Footer></Footer>
              </View>
    )
  }

export default InformationScreen;
