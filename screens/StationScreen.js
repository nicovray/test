//  import Core Components 
import { Text, View } from 'react-native'; 
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
          console.log(response.data); 
        setContractData(response.data); 
      } catch (error) { 
          console.log(error.message); 
      } 
    })(); 
  }, []) 
); 

return ( 
  <View > 
    <Text>STATION</Text> 
  </View> 
  ); 
} 