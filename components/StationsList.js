import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from 'axios';
import { Text, View, FlatList, StyleSheet } from 'react-native';

export default function Stations() {
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
        <View>
          <Text style={styles.title}>LISTE DES STATIONS</Text>
          <FlatList
              data={contractData}
              keyExtractor={(item) => item.number}
              renderItem={({ item }) => (
              <View style={styles.list}>
                <Text style={styles.nameStation}>Station : {item.name}</Text>
                <Text>Statut : {item.status}</Text>
                <Text>Adresse : {item.address}</Text>
                <Text>Nombres de vélos disponibles : {item.available_bike_stands}</Text>
                <Text>Nombres de bornes libres : {item.available_bikes}</Text>
              </View>
              )}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 28,
      color: '#ff4500',
      marginTop: 20,
      marginBottom: 20,
    },
    list: {
      marginBottom: 20,
    },
    nameStation: {
      color: '#ff4500',
    },
  });