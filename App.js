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
              if (route.name === "HOME") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "MAP") {
                iconName = focused ? "map" : "map-outline";
              } else if (route.name === "STATION") {
                iconName = focused ? "bicycle" : "bicycle-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "gray",
          })}
        >
        
        {/* setting up the tab navigation between the 3 screens */}
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen name="MAP" component={MapScreen} />
          <Tab.Screen name="STATION" component={StationScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}