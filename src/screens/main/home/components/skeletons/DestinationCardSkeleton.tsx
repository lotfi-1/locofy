import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../../../../../contexts/ThemeProvider';


export const DestinationCardSkeleton = () => {
  const { colors } = useTheme();
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const opacity = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <View style={[destStyles.card, { backgroundColor: colors.surface }]}>
      <Animated.View style={[destStyles.imageSkeleton, { opacity }]} />

      <View style={destStyles.info}>
        <View>
          <Animated.View style={[destStyles.nameSkeleton, { opacity }]} />
          <Animated.View style={[destStyles.countrySkeleton, { opacity }]} />
        </View>
        <Animated.View style={[destStyles.durationSkeleton, { opacity, backgroundColor: colors.background }]} />
      </View>
    </View>
  );
};

const destStyles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 10,
    gap: 10,
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginTop: 14
  },
  imageSkeleton: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#C1C7CF',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameSkeleton: {
    width: 70,
    height: 14,
    borderRadius: 4,
    backgroundColor: '#C1C7CF',
    marginBottom: 4,
  },
  countrySkeleton: {
    width: 50,
    height: 12,
    borderRadius: 4,
    backgroundColor: '#C1C7CF',
  },
  durationSkeleton: {
    width: 40,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#C1C7CF',
  },
});