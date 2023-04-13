//to set up a tab navigation between the 3 screens and create a safe area view for the app
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
//import screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from "./screens/MapScreen";
import StationScreen from "./screens/StationScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
        // customizing the appearance of the tab bar
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "ACCUEIL") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "CARTE") {
                iconName = focused ? "map" : "map-outline";
              } else if (route.name === "STATIONS") {
                iconName = focused ? "bicycle" : "bicycle-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "gray",
          })}
        >
        
        {/* setting up the tab navigation between the 3 screens */}
          <Tab.Screen name="ACCUEIL" component={HomeScreen} />
          <Tab.Screen name="CARTE" component={MapScreen} />
          <Tab.Screen name="STATIONS" component={StationScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}