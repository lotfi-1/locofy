import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { TabBarIcon } from "../components/navigation/TabBarIcon";
import { AppFonts } from "../utils";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Image, Text } from "react-native";
import { LogoSvg } from "../assets";
import { DrawerHeaderLeft } from "../components/headers";
import ProfileHeaderRight from "../components/headers/ProfileHomeHeaderRight";

export const getHomeTabOptions = (routeName: RouteProp<ParamListBase, string>, colors: any): BottomTabNavigationOptions => ({
  headerStyle: {
    // height: 68,
    shadowColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTitleAlign: 'center',
  headerTitleContainerStyle: {
    paddingHorizontal: 16,
    marginHorizontal: 0,
  },
  headerLeftContainerStyle: {
    paddingStart: 16,
    paddingEnd: 16,
  },
  headerRightContainerStyle: {
    paddingStart: 16,
    paddingEnd: 16,
  },
  headerTitle: () => <LogoSvg />,
  headerLeft: () => <DrawerHeaderLeft />,
  headerRight: () => <ProfileHeaderRight />

});