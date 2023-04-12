//  import Core Components 
import { FlatList, Text, View } from 'react-native'; 
import axios from 'axios'; 
import React, { useCallback, useState } from "react"; 
import { useFocusEffect } from "@react-navigation/native"; 

export default function StationScreen() { 

const [contractData, setContractData] = useState([]); 

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
  <FlatList
    data={contractData}
    keyExtractor={(item) => item.number}
    renderItem={({ item }) => (
      <View>
        <Text>Station : {item.name}</Text>
        <Text>Adresse : {item.address}</Text>
        <Text>Capacité : {item.bike_stands}</Text>
        <Text>Nombres de vélos disponibles : {item.available_bike_stands}</Text>
        <Text>Nombres de bornes libres : {item.available_bikes}</Text>
      </View>
    )}
  />
  ); 
}