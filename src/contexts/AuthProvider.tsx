import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/User';
import { authorization } from '../services/authService';
import { ApiError } from '../types/ApiError';



interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => Promise<boolean>;
}

const USER_KEY = "@app_user";
const AUTH_TOKEN_KEY = "@app_auth_token";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    restoreAuthState();
  }, []);

  const restoreAuthState = async () => {
    try {
      const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
      // if (!token) return;

      const result = await authorization(token ?? "test");

      if (isApiError(result)) {
        await clearAuth();
      } else {
        setUser(result);
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(result));
      }
    } catch (err) {
      await clearAuth();
    } finally {
      setIsLoading(false);
    }
  };

  const clearAuth = async () => {
    await AsyncStorage.multiRemove([USER_KEY, AUTH_TOKEN_KEY]);
    setUser(null);
  };

  const logout = async () => {
    try {
      await clearAuth();
      return true;
    } catch (err) {
      return false;
    }
  };

  const value: AuthContextProps = {
    user,
    isAuthenticated: !!user,
    isLoading,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const isApiError = (res: unknown): res is ApiError => {
  return typeof res === "object" && res !== null && "type" in res && "message" in res;
};
