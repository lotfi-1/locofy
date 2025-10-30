import React from 'react';
import { useTheme } from './contexts/ThemeProvider';
import {
  View, StatusBar,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigation from './navigation/AppNavigation';


const Root: React.FC = () => {
  const { isDark, colors } = useTheme();
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;


  return (
    <View style={[{ flex: 1 }]}>
      <AppNavigation />
    </View>
  );
};

export default Root;