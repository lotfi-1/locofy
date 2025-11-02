import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../../../../../contexts/ThemeProvider';

export const FlightCardSkeleton = () => {
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
    <View style={styles.wrapper}>
      <View style={[styles.image, { backgroundColor: colors.surface }]}>
        <View style={styles.overlay} />
        <Animated.View style={[styles.heartSkeleton, { opacity }]} />
        <View style={styles.info}>
          <Animated.View style={[styles.labelSkeleton, { opacity }]} />
          <View style={styles.row}>
            <Animated.View style={[styles.citySkeleton, { opacity }]} />
            <Animated.View style={[styles.priceSkeleton, { opacity }]} />
          </View>
        </View>
      </View>

      <FlightInfoSkeleton />
    </View>
  );
};

const FlightInfoSkeleton = () => {
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
    <View style={styles.infoWrapper}>
      <Animated.View style={[styles.headingSkeleton, { opacity }]} />

      <View style={[styles.card, { backgroundColor: colors.surface }]}>
        <View style={styles.routeContainer}>
          <View style={{ alignItems: 'flex-start' }}>
            <Animated.View style={[styles.airportCodeSkeleton, { opacity }]} />
            <Animated.View style={[styles.cityNameSkeleton, { opacity }]} />
          </View>

          <View style={styles.planeContainer}>
            <Animated.View style={[styles.circleSkeleton, { opacity, borderColor: colors.primary }]} />
            <Animated.View style={[styles.dotDevider, { opacity, borderColor: colors.border }]} />
            <Animated.View style={[styles.planeSkeleton, { opacity }]} />
            <Animated.View style={[styles.dotDevider, { opacity, borderColor: colors.border }]} />
            <Animated.View style={[styles.circleSkeleton, { opacity, borderColor: colors.primary }]} />
          </View>

          <View style={{ alignItems: 'flex-end' }}>
            <Animated.View style={[styles.airportCodeSkeleton, { opacity }]} />
            <Animated.View style={[styles.cityNameSkeleton, { opacity }]} />
          </View>
        </View>

        <View style={styles.footer}>
          <Animated.View style={[styles.dateTextSkeleton, { opacity }]} />
          <Animated.View style={[styles.daysTextSkeleton, { opacity }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 20,
    overflow: 'hidden',
    paddingHorizontal: 16
  },
  image: {
    height: 180,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#C1C7CF',
    opacity: 0.5,
    borderRadius: 8,
  },
  heartSkeleton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#C1C7CF',
  },
  info: {
    width: '100%',
    alignItems: 'flex-end',
    gap: 4,
  },
  labelSkeleton: {
    width: 40,
    height: 14,
    borderRadius: 4,
    backgroundColor: '#C1C7CF',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  citySkeleton: {
    width: 100,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#C1C7CF',
  },
  priceSkeleton: {
    width: 80,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#C1C7CF',
  },

  // Flight Info Skeleton Styles
  infoWrapper: {
    gap: 14,
  },
  headingSkeleton: {
    width: 140,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#C1C7CF',
  },
  card: {
    borderRadius: 8,
    gap: 32,
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 18,
  },
  airportCodeSkeleton: {
    width: 50,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#C1C7CF',
    marginBottom: 4,
  },
  cityNameSkeleton: {
    width: 70,
    height: 14,
    borderRadius: 4,
    backgroundColor: '#C1C7CF',
  },
  planeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleSkeleton: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  dotDevider: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: 2,
  },
  planeSkeleton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#C1C7CF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  dateTextSkeleton: {
    width: 150,
    height: 15,
    borderRadius: 4,
    backgroundColor: '#C1C7CF',
  },
  daysTextSkeleton: {
    width: 80,
    height: 15,
    borderRadius: 4,
    backgroundColor: '#C1C7CF',
  },
});
