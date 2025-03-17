import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import Profile from '../screens/Profile'
import Setting from '../screens/Setting'
import About from '../screens/About'
import Price from '../screens/Price'
import Contact from '../screens/Contact'
import { createDrawerNavigator } from '@react-navigation/drawer'

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          drawerPosition: "left", // Move drawer to the right
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Setting} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Price" component={Price} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})