import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Price from './screens/Price';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import HomeScreen from './screens/HomeScreen';

import Contact from './screens/Contact';
import Setting from './screens/Setting';
import Profile from './screens/Profile';
import About from './screens/About';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// // Upper Tab Navigator
// const TopTabNavigator = () => (
//   <TopTab.Navigator>
//     <TopTab.Screen name="Home" component={HomeScreen} />
//     <TopTab.Screen name="Profile" component={Profile} />
//     <TopTab.Screen name="Settings" component={Setting} />
//   </TopTab.Navigator>
// );


// Drawer Navigator
const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Homes" component={HomeScreen} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Settings" component={Setting} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Price" component={Price} />
    <Drawer.Screen name="Contact" component={Contact} />
  </Drawer.Navigator>
);

// Bottom Tabs wrapping the Drawer Navigator
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Menu" component={DrawerNavigator} options={{ headerShown: false }} />
        {/* <Tab.Screen name="TopTab" component={TopTabNavigator} /> */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
