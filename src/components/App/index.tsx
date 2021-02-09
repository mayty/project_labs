import React, { memo } from 'react';

// contexts
import { AuthContextProvider } from 'contexts/AuthContext';

// routers
import Router from 'routers';

const App = () => {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
};

export default memo(App);
