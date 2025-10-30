import React, { useEffect } from 'react';
import Root from './src';
import { ThemeProvider } from './src/contexts/ThemeProvider';
import RNBootSplash from "react-native-bootsplash";

export const App: React.FC = () => {
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => RNBootSplash.hide({ fade: true }), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  );
};

export default App;
