import { View, Text, StyleSheet, FlatList, TextInput, Switch } from 'react-native';
import React, { useEffect, useState } from "react"; 
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Station() {

  const [filteredData, setfilteredData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [isAvailable, setIsAvailable] = useState(true);

  // get the list of stations
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
  
  // toggle the switch
  const toggleSwitch1 = () => {
    setIsOpen(previousState => !previousState);
  }

  const toggleSwitch2 = () => {
    setIsAvailable(previousState => !previousState);
  }

  // filter the list of stations according to the search bar
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

  // filter the list of stations according to the switches
  const filterData = () => {
    let newData = masterData;
    if (isOpen) {
      newData = newData.filter(item => item.status === 'OPEN');
    }
    if (isAvailable) {
      newData = newData.filter(item => item.available_bikes > 0);
    }
    setfilteredData(newData);
  };
  
  useEffect(() => {
    filterData();
  }, [isOpen, isAvailable]);

  const ItemView = ({ item }) => {
    return (
      <View style={styles.itemStyle}>
        <Text style={styles.nameStation}>Station : {item.name}</Text>
        <Text>Statut : {item.status}</Text>
        <Text>Adresse : {item.address}</Text>
        <Text>Nombres de vélos disponibles : {item.available_bikes}</Text>
        <Text>Nombres de places libres : {item.available_bike_stands}</Text>
      </View>
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
      <View>
        {/* display the search bar */}
        <TextInput
          style={styles.textInputStyle}
          value={search}
          placeholder="Rechercher une station"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        />

        {/* display the switch */}
        <View style={styles.switchBox}>
          <View style={styles.switchLine}>
            <Text>{filterData}Seulement les stations ouvertes</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#ffefd5" }}
              thumbColor={isOpen ? "#ff4500" : "#f4f3f4"}
              onValueChange={toggleSwitch1}
              value={isOpen}
            />
          </View>
          <View style={styles.switchLine}>
          <Text>{filterData}Seulement les vélos disponibles</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#ffefd5" }}
              thumbColor={isAvailable ? "#ff4500" : "#f4f3f4"}
              onValueChange={toggleSwitch2}
              value={isAvailable}
            />
          </View>
        </View>
      </View>
          
      {/* display the list of stations */}    
        <View style={styles.listBox}>
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    textInputStyle: {
      height: 50,
      width: '100%',
      borderColor: '#ff4500',
      borderWidth: 1,
      paddingLeft: 20,
      marginBottom: 5,
    },
    switchBox: {
      margin: 10,
    },
    switchLine: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    listBox: {
      backgroundColor: "#ffefd5",
      width: 350,
      borderRadius: 10,
      alignItems: "center",
      padding: 20,
    },
    itemStyle: {
      padding: 15,
    },
    nameStation: {
      color: '#ff4500',
    }
});