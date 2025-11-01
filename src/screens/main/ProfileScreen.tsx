import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import ListTile from "../../components/ListTaile";
import { HelpSvg, LogoutSvg, SettingsSvg, ShieldSvg, UserAskingSvg, WalletSvg } from "../../assets";
import { useTheme } from "../../contexts/ThemeProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { UserCard } from "../../components/UserCard";
import { AppFonts } from "../../utils";
import React from "react";
import { ProfileHeader } from "../../components/headers";


const StatusOverlay = React.memo(({ visible, color }: { visible: boolean; color: string }) => {
  if (!visible) return null;
  return <View style={[styles.statusBar, { backgroundColor: color, height: StatusBar.currentHeight }]} />;
});


export function ProfileScreen({ navigation }: { navigation: any }) {
  const isFocused = useIsFocused();
  const { user } = useAuth();
  const [cardHeight, setCardHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (isFocused && !isScrolling) {
      StatusBar.setHidden(true, 'slide');
    } else {
      StatusBar.setHidden(false, 'slide');
    }
  }, [isFocused]);

  const { colors } = useTheme();

  const handleScrolling = useCallback((event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setIsScrolling(scrollY > 0);
    if (scrollY > 0) {
      StatusBar.setHidden(false, 'slide');
    } else {
      StatusBar.setHidden(true, 'slide');
    }
  }, []);


  const menuItems = [
    { icon: <WalletSvg fill={colors.accent} />, title: "Payment Details" },
    { icon: <ShieldSvg fill={colors.accent} />, title: "Covid Advisory" },
    { icon: <UserAskingSvg stroke={colors.accent} />, title: "Referral Code", isNew: true },
    { icon: <SettingsSvg fill={colors.accent} />, title: "Settings" },
    { icon: <LogoutSvg stroke={colors.accent} />, title: "Logout" },

  ];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}
        onScroll={handleScrolling}
      >
        <ProfileHeader navigation={navigation} />
        <View style={[styles.content, { backgroundColor: colors.surface }]}>
          <UserCard user={user!} onLayout={(h) => setCardHeight(h - 45)} />
          <View style={[{ marginTop: cardHeight, flex: 1 }]}>
            <View style={[styles.divider, { backgroundColor: colors.divider }]} />
            <View
              style={styles.listContainer}
            >
              {menuItems.map((item, i) => (
                <ListTile key={i} icon={item.icon} title={item.title} isNew={item.isNew} />
              ))}

              <TouchableOpacity style={[styles.helpContainer, { backgroundColor: colors.primaryLight }]}>
                <HelpSvg />
                <Text style={[styles.helpText, { color: colors.text.secondary }]}>
                  Have questions? We are here to help
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusOverlay visible={isScrolling} color={colors.surface} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  content: {
    flex: 1,
    position: "relative",
    paddingHorizontal: 16,
  },
  listContainer: {
    gap: 20,
    paddingBottom: 20,
  },
  divider: {
    height: 1,
    marginVertical: 16
  },
  helpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    borderRadius: 7
  },
  helpText: {
    fontFamily: AppFonts.Inter_Regular,
    lineHeight: 24,
    fontSize: 14
  },
  statusBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%"
  }
});