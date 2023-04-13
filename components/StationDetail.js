import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import React, { useCallback, useEffect, useState } from "react"; 
import { useFocusEffect } from "@react-navigation/native";
import axios from 'axios'; 
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Station() {

  const [filteredData, setfilteredData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState('');
    
// get the data from the API

useEffect(() => {
  fetchData();
  return () => {
    
  }
}, []);

  const fetchData = () => {
    const apiURL = 'https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=9e784f48908fa7f600eac2db5a130d65193a3f70';
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setfilteredData(responseJson);
        setmasterData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  // display seacrh fonction
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase() ;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredData(newData);
      setSearch(text);
    } else {
      setfilteredData(masterData);
      setSearch(text);
    }
  };
  
  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle}>
        {item.name}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      {/* display the search bar */}
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Rechercher une station"
            underlineColorAndroid="transparent"
            onChangeText={(text) => searchFilter(text)}
          />
          <View style={styles.stationBox}>
          {/* display the list of stations */}
            <FlatList
              data={filteredData}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
            />
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    stationBox: {
      backgroundColor: "#ffefd5",
      width: 350,
      borderRadius: 10,
      alignItems: "center",
      padding: 20,
    },
    itemStyle: {
      padding: 15,
    },
    textInputStyle: {
      height: 50,
      width: '100%',
      borderColor: '#ff4500',
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      backgroundColor: '#FFFFFF',
    }
});