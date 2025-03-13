

import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Price from './screens/Price';
import Home from './screens/BottomTag/Home';
import Bsetting from './screens/BottomTag/Bsetting';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={{ color: 'blue', fontSize: 18 }}>Home</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.container}>
    
    <Text style={{ color: 'red', fontSize: 18 }}>Profile</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text style={{ color: 'green', fontSize: 18 }}>Settings</Text>
  </View>
);

const AboutScreen = () => (
  <View style={styles.container}>
    <Text style={{ color: 'yellow', fontSize: 18 }}>About</Text>
  </View>
);

const ContactScreen = () => (
  <View style={styles.container}>
    <Text style={{ color: 'pink', fontSize: 18 }}>Contactus</Text>
  </View>
);

// Drawer Navigator
const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="About" component={AboutScreen} />
    <Drawer.Screen name="Price" component={Price} />
    <Drawer.Screen name="Contact" component={ContactScreen} />
  </Drawer.Navigator>
);

// Bottom Tabs wrapping the Drawer Navigator
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Menu" component={DrawerNavigator} options={{ headerShown: false }} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Bsetting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'lightgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
