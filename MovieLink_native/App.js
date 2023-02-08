import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "./app/screens/HomeScreen";

// import DetailsScreen from "./screens/DetailsScreen";
// import ImportantStuff from "./screens/ImportantStuff";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Important_Stuff" component={ImportantStuff} /> */}
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}