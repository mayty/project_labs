import React, { memo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// contexts
import { AuthContextProvider } from '@/contexts/AuthContext';
import { AlertContextProvider } from '@/contexts/AlertContext';

// routers
import Router from '@/routers';

const App = () => {
  return (
    <AlertContextProvider>
      <AuthContextProvider>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </AuthContextProvider>
    </AlertContextProvider>
  );
};

export default memo(App);
