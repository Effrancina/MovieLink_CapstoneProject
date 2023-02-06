import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function App() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="movie-roll" size={40} color="black"/>
      <Text style={styles.title}>MovieLink</Text>
      <StatusBar style="auto" />
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
