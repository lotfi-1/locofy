import React, { useEffect } from 'react';
import Root from './src';
import { ThemeProvider } from './src/contexts/ThemeProvider';
import { AuthProvider } from './src/contexts/AuthProvider';
import BootSplash from "react-native-bootsplash";
import { Provider } from 'react-redux';
import { store } from './src/store';

export const App: React.FC = () => {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider >
        <AuthProvider>
          <Root />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

