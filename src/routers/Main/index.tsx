import React, { memo } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const MainDrawer = createStackNavigator();

const MainRouter = () => {
  return (
    <MainDrawer.Navigator>
      <MainDrawer.Screen name={'name'} component={() => null} />
    </MainDrawer.Navigator>
  );
};

export default memo(MainRouter);
