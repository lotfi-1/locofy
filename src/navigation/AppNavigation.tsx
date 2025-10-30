import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/Splash';
import { useAuth } from '../contexts/AuthProvider';
import { MainTabs } from './MainNavigation';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        {isAuthenticated && <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}