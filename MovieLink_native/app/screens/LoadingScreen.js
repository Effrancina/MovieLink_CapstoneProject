import { MaterialCommunityIcons } from '@expo/vector-icons';
import SafeViewAndroid from '../components/SafeViewAndroid';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { useLayoutEffect } from "react";

const LoadingScreen = () => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    });

    return(
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View>
                <MaterialCommunityIcons name="movie-roll" size={40} color="black"/>
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({

})

export default LoadingScreen;