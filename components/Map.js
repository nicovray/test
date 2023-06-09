import { View, StyleSheet } from 'react-native'; 
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import { IconButton } from 'react-native-paper';
import React, { useCallback, useState } from "react"; 
import { useFocusEffect } from "@react-navigation/native";
import axios from 'axios'; 

export default function Map() {
  const nantesPosition = {
    latitude: +47.218371,
    longitude: -1.553621,
    latitudeDelta: 0.0500,
    longitudeDelta: 0.0500,
  }

  const [contractData, setContractData] = useState([]); 
  
    // get the data from the API
    useFocusEffect( 
      useCallback(() => { 
        (async () => { 
          try { 
            const response = await axios.get("https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=9e784f48908fa7f600eac2db5a130d65193a3f70"); 
              setContractData(response.data); 
          } catch (error) { 
              console.log(error.message); 
          } 
        })();
      }, []) 
    );

  return (
    // displays the map
    <View>
      <MapView
        style={styles.map}
        initialRegion={nantesPosition}        
        showsUserLocation={true}
      >
      <Marker 
        coordinate={nantesPosition}
        pinColor="#39ff14"
      />
      {contractData.map((station) => (
        <Marker
          key={station.number}
          coordinate={{
            latitude: station.position.lat,
            longitude: station.position.lng,
          }}
        >
          <IconButton
            icon="map-marker"
            iconColor="#ff4500"
            onPress={() => console.log('Pressed')}
          />
        </Marker>
      ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
    },
});