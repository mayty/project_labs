import React, { FC, memo } from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// components
import SignUpView from './component';

// types
import { AuthStackParams, SharedStackParams, RootStackParams } from '@/types/routes';

// utils
import { AUTH_STACK } from '@/utils/constants/routes';

type SignInNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParams, AUTH_STACK.SIGN_UP>,
  CompositeNavigationProp<
    StackNavigationProp<SharedStackParams>,
    StackNavigationProp<RootStackParams>
  >
>;

type SignUpContainerProps = {
  navigation: SignInNavigationProp;
};

const SignUpContainer: FC<SignUpContainerProps> = (props) => {
  const { navigation } = props;

  const googleLoading = false;
  const googleSignIn = () => {};

  const openSignIn = () => navigation.navigate(AUTH_STACK.SIGN_IN);
  const openManualSignUp = () => navigation.navigate(AUTH_STACK.MANUAL_SIGN_UP);

  return (
    <SignUpView
      openSignIn={openSignIn}
      openManualSignUp={openManualSignUp}
      openGoogleSignUp={googleSignIn}
      googleLoading={googleLoading}
    />
  );
};

export default memo(SignUpContainer);
