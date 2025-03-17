


import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import Setting from "./screens/Setting";
import About from "./screens/About";
import Price from "./screens/Price";
import Contact from "./screens/Contact";
import DrawerNavigation from "./Navigation/DrawerNavigation";


const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopTabNavigator = () => (
  <TopTab.Navigator>
    <TopTab.Screen name="Home" component={HomeScreen} />
    <TopTab.Screen name="Profile" component={Profile} />
    <TopTab.Screen name="Settings" component={Setting} />
  </TopTab.Navigator>
);



const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    
    <Stack.Screen name="Drawer" component={DrawerNavigation} />
  
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Main" component={MainStack} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;