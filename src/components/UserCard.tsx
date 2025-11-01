import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { User } from '../types/User';
import { AppFonts } from '../utils';
import { useTheme } from '../contexts/ThemeProvider';

interface UserCardProps {
  user: User;
  showLocation?: boolean;
  showBio?: boolean;
  onLayout?: (height: number) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  showLocation = true,
  showBio = true,
  onLayout
}) => {
  const { colors } = useTheme();
  const defaultImage = require('../assets/images/default-avatar.png');

  const locationText =
    user?.location?.city && user?.location?.country
      ? `${user.location.city}, ${user.location.country}`
      : user?.location?.country || user?.location?.city || '';

  return (
    <View style={[styles.container, { backgroundColor: colors.transparent }]}
      onLayout={(e) => onLayout?.(e.nativeEvent.layout.height)}
    >
      <Image
        source={user.profileImage && user.profileImage !== '' ? { uri: user.profileImage } : defaultImage}
        style={[styles.avatar, { borderColor: colors.surface }]}
        resizeMode="cover"
      />

      <Text style={[styles.name, { color: colors.text.primary }]} numberOfLines={1}>
        {user.name}
      </Text>

      {showLocation && !!locationText && (
        <Text
          style={[styles.location, { color: colors.text.muted }]}
          numberOfLines={1}
        >
          {locationText}
        </Text>
      )}

      {showBio && !!user.bio && (
        <Text
          style={[styles.bio, { color: colors.text.primary }]}
          numberOfLines={3}
        >
          {user.bio}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -45,
    left: 16,
    zIndex: 999
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 3,
  },

  name: {
    fontSize: 24,
    fontFamily: AppFonts.Inter_Bold
  },
  location: {
    fontSize: 14,
    fontFamily: AppFonts.Inter_Regular,
    marginTop: 2,
  },
  bio: {
    fontSize: 14,
    marginTop: 16,
    fontFamily: AppFonts.Inter_Regular,
    lineHeight: 24,
    opacity: 0.9,
  },
});
