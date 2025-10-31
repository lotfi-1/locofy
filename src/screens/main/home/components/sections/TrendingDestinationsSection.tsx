import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { DestinationCard } from '../DestinationCard';
import { ErrorView } from '../ErrorView';
import { DestinationCardSkeleton } from '../skeletons/DestinationCardSkeleton';
import { Destination } from '../../../../../types/Destination';
import { AppFonts } from '../../../../../utils';

interface TrendingDestinationsSectionProps {
  destinations: Destination[] | null;
  isLoading: boolean;
  error: any;
  onRetry: () => void;
  navigation: any;
}

export const TrendingDestinationsSection = ({
  destinations,
  isLoading,
  error,
  onRetry,
  navigation,
}: TrendingDestinationsSectionProps) => {
  const handleSeeAll = () => {
    navigation.navigate('TrendingDestinations');
  };

  return (
    <View style={styles.trendingSection}>
      <View style={styles.trendingHeader}>
        <Text style={styles.trendingTitle}>Trending Destinations</Text>
        <Text style={styles.seeAllText} onPress={handleSeeAll}>
          see all
        </Text>
      </View>

      {isLoading ? (
        <View style={styles.skeletonContainer}>
          <DestinationCardSkeleton />
          <DestinationCardSkeleton />
          <DestinationCardSkeleton />
        </View>
      ) : error ? (
        <ErrorView error={error} onRetry={onRetry} />
      ) : !destinations || destinations.length === 0 ? (
        <View style={styles.emptyTrendingContainer}>
          <Text>No trending destinations available</Text>
        </View>
      ) : (
        <FlatList
          horizontal
          data={destinations}
          renderItem={(item) => <DestinationCard destination={item.item} />}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  trendingSection: {
    marginTop: 30,
  },
  trendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  trendingTitle: {
    fontSize: 16,
    fontFamily: AppFonts.Inter_Bold,
    lineHeight: 24
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: AppFonts.Inter_Regular,
  },


  emptyTrendingContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  skeletonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 10,
  },
});