// App.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OnboardingStep1 from './src/screens/Onboarding/OnboardingStep1';
import OnboardingStep2 from './src/screens/Onboarding/OnboardingStep2';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import { RootStackParamList, HomeTabsParamList } from './src/navigation/types';

// ubrzanje
enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<HomeTabsParamList>();

// 1. Welcome ekran
function WelcomeScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Dobrodošao u CaliMaster!</Text>
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
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnboardingStep1"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnboardingStep1" component={OnboardingStep1} />
          <Stack.Screen name="OnboardingStep2" component={OnboardingStep2} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});
