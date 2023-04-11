import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function Map() {
    return (
      <MapView style={styles.map}
            initialRegion={{
                latitude: +47.218371,
                longitude: -1.553621,
                latitudeDelta: 0.0500,
                longitudeDelta: 0.0500,
            }}
        />
    );
  }

const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
    },
  });