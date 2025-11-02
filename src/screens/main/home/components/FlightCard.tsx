import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Flight } from '../../../../types/Flight';
import { useTheme } from '../../../../contexts/ThemeProvider';
import { HeartSvg } from '../../../../assets';
import { AppFonts } from '../../../../utils';
import { FlightInfo } from './FlightInfo';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { FavoriteModel } from './FavoriteModel';
import { toggleFavorite } from '../../../../store/slices';

interface FlightCardProps {
  flight: Flight;
}

export const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector((state) => state.favoriteFlight);
  const token = 'testToken';

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite({ token, flight }));
  };



  return (
    <>
      <View style={styles.wrapper}>
        <ImageBackground
          source={{ uri: flight.airline }}
          style={styles.image}
          imageStyle={[styles.imageBg, { backgroundColor: colors.surface }]}
        >
          <View style={styles.overlay} />

          <TouchableOpacity
            onPress={handleToggleFavorite}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <HeartSvg
                stroke={flight.isFavorite ? colors.transparent : colors.white}
                fill={flight.isFavorite ? colors.error : colors.transparent}
              />
            )}
          </TouchableOpacity>

          <View style={styles.info}>
            <Text style={[styles.label, { color: colors.white }]}>From</Text>
            <View style={styles.row}>
              <Text style={[styles.city, { color: colors.white }]}>
                {flight.from.city}
              </Text>
              <Text style={[styles.price, { color: colors.white }]}>
                ${flight.priceUSD}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <FlightInfo flight={flight} />
      </View>
      <FavoriteModel />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 20,
    paddingHorizontal:16,
    overflow: "hidden",
  },
  image: {
    height: 180,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  imageBg: {
    borderRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "#000",
    opacity: 0.25,
    borderRadius: 8,
  },
  info: {
    width: "100%",
    alignItems: "flex-end",
  },
  label: {
    fontFamily: AppFonts.Inter_Regular,
    fontSize: 14,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  city: {
    fontFamily: AppFonts.BalooBhai2_Bold,
    fontSize: 28,
  },
  price: {
    fontFamily: AppFonts.BalooBhai2_Bold,
    fontSize: 28,
  },
});


