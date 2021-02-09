import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// contexts
import { useAuthContext } from 'contexts/AuthContext';

const RootStack = createStackNavigator();

const RootRouter = () => {
  const { token, isLoading } = useAuthContext();

  // TO-DO: return SplashScreen
  if (isLoading) {
    return null;
  }

  return (
    <RootStack.Navigator>
      <RootStack.Screen name="" />
    </RootStack.Navigator>
  );
};

export default memo(RootRouter);
