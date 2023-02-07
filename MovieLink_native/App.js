import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import  {useEffect,useState} from 'react'

export default function App() {
  const[movies,setMovies] = useState([])

  useEffect( () => {
    fetch("http://192.168.100.127:8080/movies")
      .then (res => res.json())
      // .then(moviesData => setMovies(moviesData))
      .then(moviesData => setMovies(moviesData))
      // .then(moviesData => setMovies(moviesData[0]))
      .catch(err => console.error(err));
  
  }, [])

  const movieItems = movies.map( (movie) => {
    console.log(movie.title)
    return <Text key={movie.id}>{movie.title}</Text>
  })

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="movie-roll" size={40} color="black"/>
      <Text style={styles.title}>MovieLink</Text>
      <StatusBar style="auto" />
      <View>
        <FlatList
            data={movies}
            renderItem={(itemData) => {
              console.log(itemData)
              return (
                <View>
                  <Text>{itemData.item.title}</Text>
                </View>
              );
            }}
            alwaysBounceVertical={false}
          >
            )
          </FlatList>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }

});
