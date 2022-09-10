import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet} from 'react-native';
import MainScreen from './src/screens/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: '100%'
  }
})

