import { RefreshControl, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { useTheme } from "../../../contexts/ThemeProvider";
import { UpcomingFlightSection } from "./components/sections/UpcomingFlightSection";
import { TrendingDestinationsSection } from "./components/sections/TrendingDestinationsSection";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchTrendingDestinations, fetchUpcomingFlight, refreshTrendingDestinations, refreshUpcomingFlight } from "../../../store/slices";

interface HomeMainScreenProps {
  navigation: any;
}



export function HomeMainScreen({ navigation }: HomeMainScreenProps) {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  const { upcomingFlight, loading, errors } = useAppSelector(
    (state) => state.flight
  );
  const {
    destinations,
    isLoading: trendingLoading,
    error: trendingError,
    isRefreshing: trendingRefreshing,
  } = useAppSelector((state) => state.trending);

  const token = 'testToken';

  useEffect(() => {
    dispatch(fetchUpcomingFlight(token));
    dispatch(fetchTrendingDestinations(token));
  }, [dispatch, token]);

  const handleRefresh = useCallback(() => {
    dispatch(refreshUpcomingFlight(token));
    dispatch(refreshTrendingDestinations(token));
  }, [dispatch, token]);

  const isRefreshingData = loading.refresh || trendingRefreshing;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshingData}
            onRefresh={handleRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
      >
        <UpcomingFlightSection
          isLoading={loading.fetch}
          error={errors.fetch}
          onRetry={() => dispatch(fetchUpcomingFlight(token))}
          upcomingFlight={upcomingFlight}
        />

        <TrendingDestinationsSection
          destinations={destinations}
          isLoading={trendingLoading}
          error={trendingError}
          onRetry={() => dispatch(fetchTrendingDestinations(token))}
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
