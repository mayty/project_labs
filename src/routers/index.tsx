import React, { memo } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';

// utils
import { COLORS } from '@/utils/constants/styles';

// routers
import RootRouter from './Root';

const NavigationTheme: Theme = {
  dark: false,
  colors: {
    background: COLORS.WHITE,
    card: COLORS.WHITE,
    primary: COLORS.BLACK,
    text: COLORS.BLACK,
    border: COLORS.LIGHT_GRAY,
    notification: COLORS.BLACK,
  },
};

const Router = () => (
  <NavigationContainer theme={NavigationTheme}>
    <RootRouter />
  </NavigationContainer>
);

export default memo(Router);
