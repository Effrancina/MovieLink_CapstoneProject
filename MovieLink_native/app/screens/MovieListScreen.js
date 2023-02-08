import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import  {useEffect,useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import SafeViewAndroid from '../components/SafeViewAndroid';
import { getAllMovies } from '../services/MovieServices';


 const MovieListScreen = () => {
    const[movies,setMovies] = useState([])
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    });

    useEffect( () => {
        getAllMovies()
        .then(moviesData => setMovies(moviesData))
        .catch(err => console.error(err));
    }, [])

    const movieItems = movies.map( (movie) => {

    return <Text key={movie.id}>{movie.title}</Text>
    })

    return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <MaterialCommunityIcons name="movie-roll" size={40} color="black"/>
        <Text style={styles.title}>MovieLink</Text>
        <StatusBar style="auto" />
        <View>
        <FlatList
            data={movies}
            renderItem={(itemData) => {
                
                return (
                    <View>
                    <Text>{itemData.item.title}</Text>
                </View>
                );
            }}
            alwaysBounceVertical={false}
            >
            </FlatList>
        </View>
    </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    // container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // },
    
    title: {
    fontSize: 20,
    fontWeight: 'bold',
    }

});

export default MovieListScreen;
