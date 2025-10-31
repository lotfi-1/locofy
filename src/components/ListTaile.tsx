import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';
import { AppFonts } from '../utils';

export type ListTileProps = {
  title: string;
  icon?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  isNew?: boolean
};

export default function ListTile({
  title,
  icon,
  onPress,
  isNew = false
}: ListTileProps) {
  const { colors } = useTheme();

  const renderIcon = () => {
    if (!icon) return null;
    return (
      <View style={[styles.iconWrapper, { backgroundColor: colors.primaryLight }]}>
        {icon}
      </View>
    );
  };


  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: colors.surface },
      ]}
      accessibilityRole="button"
      hitSlop={8}
    >
      {renderIcon()}

      <View style={styles.textContainer}>
        <Text
          numberOfLines={1}
          style={[styles.title, { color: colors.text.primary }]}
        >
          {title}
        </Text>
        {
          isNew && <View style={[styles.newContainer, { backgroundColor: colors.secondary }]}>
            <Text style={[styles.new, { color: colors.white }]}>new</Text>
          </View>
        }
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    columnGap: 16
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10
  },
  title: {
    fontSize: 16,
    fontFamily: AppFonts.Roboto_Medium,
    lineHeight: 24
  },
  newContainer: {
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 7
  },
  new: {
    fontSize: 13,
    lineHeight: 18,
    textTransform: "capitalize",
    fontFamily: AppFonts.Roboto_Medium,

  }
});
