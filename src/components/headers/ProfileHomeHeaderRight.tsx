import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeProvider";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/AuthProvider";

export default function ProfileHomeHeaderRight() {
  const { colors } = useTheme();
  const { user } = useAuth();
  const profileUrl = user?.profileImage;
  const navigation = useNavigation<NavigationProp<any>>();
  const hasNotification = true;
  const defaultImage = require('../../assets/images/default-avatar.png');
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Profile')}
      activeOpacity={0.8}
    >
      <View style={styles.avatarContainer}>
        <Image
          source={defaultImage}
          style={[styles.avatar]}
          resizeMode="cover"
        />
        {hasNotification && <View style={[styles.badge, { backgroundColor: colors.warning }]} />}

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  avatarContainer: {
    position: 'relative',
    width: 36,
    height: 36,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});