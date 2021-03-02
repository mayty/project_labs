import React, { FC, memo } from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// components
import SignInView from './component';

// types
import { AuthStackParams, RootStackParams, SharedStackParams } from '@/types/routes';

// utils
import { AUTH_STACK } from '@/utils/constants/routes';

type SignInNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParams, AUTH_STACK.SIGN_IN>,
  CompositeNavigationProp<
    StackNavigationProp<SharedStackParams>,
    StackNavigationProp<RootStackParams>
  >
>;

type SignInContainerProps = {
  navigation: SignInNavigationProp;
};

const SignInContainer: FC<SignInContainerProps> = (props) => {
  const { navigation } = props;

  const googleLoading = false;
  const googleSignIn = () => {};

  const openSignUp = () => navigation.navigate(AUTH_STACK.SIGN_UP);
  const openManualSignIn = () => navigation.navigate(AUTH_STACK.MANUAL_SIGN_IN);

  return (
    <SignInView
      openSignUp={openSignUp}
      openManualSignIn={openManualSignIn}
      openGoogleSignIn={googleSignIn}
      googleLoading={googleLoading}
    />
  );
};

export default memo(SignInContainer);
