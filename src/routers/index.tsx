import React, { memo } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import RootRouter from './Root';

const Router = () => (
  <NavigationContainer>
    <RootRouter />
  </NavigationContainer>
);

export default memo(Router);
