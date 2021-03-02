import React, { memo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// contexts
import { AuthContextProvider } from '@/contexts/AuthContext';

// routers
import Router from '@/routers';

const App = () => {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </AuthContextProvider>
  );
};

export default memo(App);
