import React, { FC, memo } from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// components
import SignInView from './component';

// hooks
import { useSignInGoogle } from '@/hooks/auth/social';
import { useAuthHelpers } from '@/contexts/AuthContext';
import { useErrorAlert } from '@/contexts/AlertContext';

// types
import { AuthStackParams, RootStackParams, SharedStackParams } from '@/types/routes';

// utils
import { AUTH_STACK } from '@/utils/constants/routes';
import { AUTH_ERROR_TITLE } from '@/utils/constants/messages';
import { formatFirebaseError } from '@/utils/helpers/auth';

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

  const alertError = useErrorAlert();
  const onError = (error?: any) =>
    alertError(AUTH_ERROR_TITLE, formatFirebaseError(error?.message || error));

  const { signIn } = useAuthHelpers();
  const [googleSignIn, { loading: googleLoading }] = useSignInGoogle({
    onSuccess: signIn,
    onError,
  });

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
