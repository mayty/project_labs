import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// components
import SignIn from '@/components/Auth/SignIn';
import SignUp from '@/components/Auth/SignUp';
import ManualSignIn from '@/components/Auth/ManualSignIn';
import ManualSignUp from '@/components/Auth/ManualSignUp';

// utils
import { AUTH_STACK } from '@/utils/constants/routes';

// types
import { AuthStackParams } from '@/types/routes';

import { NavigatorOptions } from './options';

const AuthStack = createStackNavigator<AuthStackParams>();

const AuthRouter = () => (
  <AuthStack.Navigator screenOptions={NavigatorOptions}>
    <AuthStack.Screen name={AUTH_STACK.SIGN_IN} component={SignIn} />
    <AuthStack.Screen name={AUTH_STACK.SIGN_UP} component={SignUp} />
    <AuthStack.Screen name={AUTH_STACK.MANUAL_SIGN_IN} component={ManualSignIn} />
    <AuthStack.Screen name={AUTH_STACK.MANUAL_SIGN_UP} component={ManualSignUp} />
  </AuthStack.Navigator>
);

export default memo(AuthRouter);
