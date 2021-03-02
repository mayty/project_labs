import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// routers
import AuthRouter from '@/routers/Auth';

// utils
import { ROOT_STACK } from '@/utils/constants/routes';

// types
import { RootStackParams } from '@/types/routes';

const RootStack = createStackNavigator<RootStackParams>();

const RootRouter = () => {
  const routeName = ROOT_STACK.AUTH;
  const routeComponent = AuthRouter;

  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={routeName} component={routeComponent} />
    </RootStack.Navigator>
  );
};

export default memo(RootRouter);
