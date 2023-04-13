import { View, Text, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useCallback, useState } from "react"; 
import { useFocusEffect } from "@react-navigation/native";
import axios from 'axios'; 

export default function Station() {

  const [contractData, setContractData] = useState([]); 
  
    // get the data from the API
    useFocusEffect( 
      useCallback(() => { 
        (async () => { 
          try { 
            const response = await axios.get("https://api.jcdecaux.com/vls/v1/stations/001?contract=Nantes&apiKey=9e784f48908fa7f600eac2db5a130d65193a3f70"); 
              setContractData(response.data); 
          } catch (error) { 
              console.log(error.message); 
          } 
        })();
      }, []) 
    );

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            DETAIL DE LA STATION
        </Text>
        <View style={styles.stationBox}>
                <Text style={styles.nameStation}>Station : {contractData.name}</Text>
                <Text>Statut : {contractData.status}</Text>
                <Text>Adresse : {contractData.address}</Text>
                <Text>Nombres de vélos disponibles : {contractData.available_bike_stands}</Text>
                <Text>Nombres de bornes libres : {contractData.available_bikes}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#ff4500',
        marginBottom: 20,
    },
    stationBox: {
        backgroundColor: "#ffefd5",
        width: 350,
        borderRadius: 10,
        alignItems: "center",
        padding: 20,
    },
    nameStation: {
        color: '#ff4500',
        fontWeight: "bold",
        marginBottom: 10,
      }
});