import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../../contexts/ThemeProvider';
import { AppFonts } from '../../../../utils';

interface EmptyStateProps {
  message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  message = 'No upcoming flights'
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.text.secondary }]}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  text: {
    fontSize: 16,
    fontFamily: AppFonts.Roboto_Medium,
  },
});