import { ActivityIndicator, FlatList, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../contexts/ThemeProvider";
import { useUpcomingFlights } from './hooks/useUpcomingFlights';
import { FlightCard } from './components/FlightCard';
import { ErrorView } from './components/ErrorView';
import { EmptyState } from './components/EmptyState';
import { useTrendingDestinations } from "./hooks/useTrendingDestinations";
import { DestinationCard } from "./components/DestinationCard";
import { UpcomingFlightSection } from "./components/sections/UpcomingFlightSection";
import { TrendingDestinationsSection } from "./components/sections/TrendingDestinationsSection";
import { useCallback } from "react";

interface HomeMainScreenProps {
  navigation: any;
}


export function HomeMainScreen({ navigation }: HomeMainScreenProps) {
  const { colors } = useTheme();

  const upcomingFlightQuery = useUpcomingFlights("testToken");
  const trendingQuery = useTrendingDestinations("testToken");

  const handleRefresh = () => {
    upcomingFlightQuery.refresh();
    trendingQuery.refresh();
  };

  const isRefreshing = upcomingFlightQuery.refreshing || trendingQuery.refreshing;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
      >
        <UpcomingFlightSection
          upcomingFlight={upcomingFlightQuery.upcomingFlight}
          isLoading={upcomingFlightQuery.isLoading}
          error={upcomingFlightQuery.error}
          onRetry={upcomingFlightQuery.retry}
        />

        <TrendingDestinationsSection
          destinations={trendingQuery.trendingDistinations}
          isLoading={trendingQuery.isLoading}
          error={trendingQuery.error}
          onRetry={trendingQuery.retry}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
});
