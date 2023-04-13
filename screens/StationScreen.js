//  import Core Components
import { StyleSheet, Text, View } from 'react-native';

export default function StationScreen() {
    return (
      <View style={{alignItems: 'center' }}>
        <Text style={styles.title}>Stations</Text>
      </View>
    );
  }

// style the screen and its elements
const styles = StyleSheet.create({
    title: {
        fontSize: 28,
    }
});