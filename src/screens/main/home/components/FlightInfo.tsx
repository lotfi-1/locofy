import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Flight } from '../../../../types/Flight';
import { useTheme } from '../../../../contexts/ThemeProvider';
import { AppFonts } from '../../../../utils';
import { RoundedFlightSvg } from '../../../../assets';

interface FlightCardProps {
  flight: Flight;
}


export const FlightInfo: React.FC<FlightCardProps> = ({ flight }) => {
  const { colors } = useTheme();

  const flightDate = new Date(flight.departureDate).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Upcoming Flight</Text>

      <View style={[styles.card, { backgroundColor: colors.surface }]}>
        <View style={styles.routeContainer}>
          <View style={{ alignItems: "flex-start" }}>
            <Text style={[styles.airportCode, { color: colors.text.secondary }]}>{flight.from.code}</Text>
            <Text style={[styles.cityName, { color: colors.text.primary }]}>{flight.from.city}</Text>
          </View>

          <View style={styles.planeContainer}>
            <View style={[styles.circle, { borderColor: colors.primary }]} />
            <View style={[styles.dotDevider, { borderColor: colors.border }]} />
            <View style={styles.plane}>
              <RoundedFlightSvg fill={colors.primaryLight} />
            </View>
            <View style={[styles.dotDevider, { borderColor: colors.border }]} />
            <View style={[styles.circle, { borderColor: colors.primary }]} />
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={[styles.airportCode, { color: colors.text.secondary }]}>{flight.to.code}</Text>
            <Text style={[styles.cityName, { color: colors.text.primary }]}>{flight.to.city}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.dateText, { color: colors.text.muted }]}>
            {`Departs on: ${flightDate}`}
          </Text>
          <Text style={styles.daysText}>
            {flight.daysToGo} days <Text style={styles.daysSubtext}>to go</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 14,
  },
  heading: {
    fontFamily: AppFonts.Inter_Bold,
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    borderRadius: 8,
    gap: 32,
  },
  routeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 18
  },
  airportCode: {
    fontSize: 20,
    fontFamily: AppFonts.Inter_Bold
  },
  cityName: {
    fontSize: 14,
    fontFamily: AppFonts.Inter_Regular
  },
  planeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 2,
  },
  dotDevider: {
    flex: 1,
    borderWidth: 1,
    borderStyle: "dashed",
    marginHorizontal: 2
  },
  plane: {

  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  dateText: {
    fontSize: 15,
    fontFamily: AppFonts.Roboto_Regular,
  },
  daysText: {
    fontSize: 15,
    fontFamily: AppFonts.Inter_Bold,
  },
  daysSubtext: {
    fontFamily: AppFonts.Inter_Regular,
    fontSize: 15,
  },
});

