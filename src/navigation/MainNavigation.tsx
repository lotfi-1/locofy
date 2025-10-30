
import * as React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  TouchableOpacity,

} from 'react-native';
import { BookingScreen, HomeMainScreen, ProfileScreen, SearchScreen } from '../screens/main/Screen';

export function Icon({ children }: { children: any }) {
  return (
    <View style={{ width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>{children}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        // Basic placeholder tab icons
        tabBarIcon: () => {
          if (route.name === 'HomeTab') return <Icon>🏠</Icon>;
          if (route.name === 'Booking') return <Icon>📅</Icon>;
          if (route.name === 'Search') return <Icon>🔎</Icon>;
          if (route.name === 'Profile') return <Icon>👤</Icon>;
          return null;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeMainScreen}
        options={({ navigation }): BottomTabNavigationOptions => ({
          title: 'Home',

          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ paddingLeft: 8 }}>
          //     <Icon>☰</Icon>
          //   </TouchableOpacity>
          // ),
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
          // When entering Search tab we show a back icon in the header.
          // Pressing it will navigate back to Home tab.
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeTab')}
              style={{ paddingLeft: 8 }}
            >
              <Icon>{'‹'}</Icon>
            </TouchableOpacity>
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: 'Profile',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeTab')}
              style={{ paddingLeft: 8 }}
            >
              <Icon>{'‹'}</Icon>
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
}

