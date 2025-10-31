import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { TabBarIcon } from "../components/navigation/TabBarIcon";
import { AppFonts } from "../utils";

export const getTabBarOptions = (routeName: string, colors: any): BottomTabNavigationOptions => ({
  headerShown: true,
  tabBarActiveTintColor: colors.icon.active,
  tabBarInactiveTintColor: colors.icon.inactive,
  tabBarStyle: {
    backgroundColor: colors.surface,
    height: 81,
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: "space-between"
  },
  tabBarItemStyle: {
    height: 49,
  },
  tabBarIconStyle: {
    margin: 0,
    height: 20,
    width: 20,
    marginTop: -5,
    marginBottom: 14,

  },

  tabBarLabelStyle: {
    fontSize: 13,
    fontFamily: AppFonts.Roboto_Regular,
    lineHeight: 15,
  },
  tabBarIcon: ({ color }) => TabBarIcon({ routeName, color }),

});