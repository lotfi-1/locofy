import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ApiError } from '../../../../types/ApiError';
import { useTheme } from '../../../../contexts/ThemeProvider';
import { AppFonts, shouldShowRetry } from '../../../../utils';

interface ErrorViewProps {
  error: ApiError;
  onRetry: () => void;
}

export const ErrorView: React.FC<ErrorViewProps> = ({ error, onRetry }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.errorText, { color: colors.error }]}>
        {error.message}
      </Text>

      {shouldShowRetry(error.type) && (
        <TouchableOpacity
          style={[styles.retryButton, { backgroundColor: colors.primary }]}
          onPress={onRetry}
          activeOpacity={0.7}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  errorText: {
    fontSize: 16,
    fontFamily: AppFonts.Roboto_Medium,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});