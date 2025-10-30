import React, { useEffect } from 'react';
import Root from './src';
import { ThemeProvider } from './src/contexts/ThemeProvider';
import { AuthProvider } from './src/contexts/AuthProvider';
import BootSplash from "react-native-bootsplash";


export const App: React.FC = () => {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);
  
  return (
    <ThemeProvider >
      <AuthProvider>
        <Root />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

