//  import Core Components
import { StyleSheet, Text, View } from 'react-native';

// import custom components
import Map from '../components/Map';

export default function MapScreen() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }

// style the screen and its elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});