
import * as React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,

} from 'react-native';
import { HomeMainScreen } from '../screens/main/home/HomeScreen';
import { useTheme } from '../contexts/ThemeProvider';
import { getTabBarOptions } from '../config/tabBarConfig';
import { getHomeTabOptions } from '../config/homeTabConfig';
import { BookingScreen } from '../screens/main/BookingScreen';
import { SearchScreen } from '../screens/main/SearchScreen';
import { ProfileScreen } from '../screens/main/ProfileScreen';




const Tab = createBottomTabNavigator();

export function MainTabs() {
  const { colors } = useTheme();


  return (

    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={({ route, navigation }) => ({
        ...getTabBarOptions(route.name, colors)
      })}
    >
      <Tab.Screen
        name="Explore"
        component={HomeMainScreen}
        options={({ route, navigation }): BottomTabNavigationOptions => ({
          ...getHomeTabOptions(route, colors)
        })}
      />

      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{ title: 'Booking' }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }) => ({
          title: 'Search',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeTab')}
              style={{ paddingLeft: 8 }}
            >
            </TouchableOpacity>
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route, navigation }) => ({
          headerShown: false
        })}
      />
    </Tab.Navigator >

  );
}

