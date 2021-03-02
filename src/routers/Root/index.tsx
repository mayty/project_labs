import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// routers
import AuthRouter from '@/routers/Auth';
import MainRouter from '@/routers/Main';

// components
import Splash from '@/components/Splash';

// contexts
import { useAuthContext, useSignedIn } from '@/contexts/AuthContext';

// utils
import { ROOT_STACK } from '@/utils/constants/routes';

// types
import { RootStackParams } from '@/types/routes';

const RootStack = createStackNavigator<RootStackParams>();

const RootRouter = () => {
  const { isLoading } = useAuthContext();
  const isSignedIn = useSignedIn();

  if (isLoading) {
    return <Splash />;
  }

  const routeName = isSignedIn ? ROOT_STACK.MAIN : ROOT_STACK.AUTH;
  const routeComponent = isSignedIn ? MainRouter : AuthRouter;

  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={routeName} component={routeComponent} />
    </RootStack.Navigator>
  );
};

export default memo(RootRouter);
