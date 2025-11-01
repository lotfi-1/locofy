import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { LogoSvg } from "../assets";
import { DrawerHeaderLeft, ProfileHomeHeaderRight } from "../components/headers";

export const getHomeTabOptions = (routeName: RouteProp<ParamListBase, string>, colors: any): BottomTabNavigationOptions => ({
  headerStyle: {
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
  headerRight: () => <ProfileHomeHeaderRight />

});