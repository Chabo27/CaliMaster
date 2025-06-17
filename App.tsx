// App.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';

// ubrzanje
enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 1. Welcome ekran
function WelcomeScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Dobrodošao u CaliMaster!</Text>
    </View>
  );
}

// 2. Profile ekran (kasnije nadogradiš formom)
function ProfileScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Profil korisnika</Text>
    </View>
  );
}

// Tab navigacija
function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Glavni App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});
