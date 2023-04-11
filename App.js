
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from './screens/HomeScreen';
import MapScreen from "./screens/MapScreen";
import StationScreen from "./screens/StationScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
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
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen name="MAP" component={MapScreen} />
          <Tab.Screen name="STATION" component={StationScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}