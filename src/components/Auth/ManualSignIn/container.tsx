import React, { FC, memo, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

// components
import SignInView from './component';

// types
import { AuthStackParams } from '@/types/routes';

// utils
import { AUTH_STACK } from '@/utils/constants/routes';
import { AUTH_ERROR_TITLE } from '@/utils/constants/messages';
import { formatFirebaseError } from '@/utils/helpers/auth';

// hooks
import { useSignInManually } from '@/hooks/auth/manual';
import { useAuthHelpers } from '@/contexts/AuthContext';
import { useErrorAlert } from '@/contexts/AlertContext';

type SignInContainerProps = {
  navigation: NavigationProp<AuthStackParams, AUTH_STACK.MANUAL_SIGN_IN>;
};

const SignInContainer: FC<SignInContainerProps> = (props) => {
  const {} = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const alertError = useErrorAlert();
  const onError = (error: any) =>
    alertError(AUTH_ERROR_TITLE, formatFirebaseError(error?.message || error));

  const { signIn: authSignIn } = useAuthHelpers();
  const [signIn, { loading }] = useSignInManually({
    email,
    password,
    onSuccess: authSignIn,
    onError,
  });

  const disableSignIn = !email || !password;

  return (
    <SignInView
      signIn={signIn}
      email={email}
      password={password}
      onEmailChanged={setEmail}
      onPasswordChanged={setPassword}
      disableSignIn={disableSignIn}
      loading={loading}
    />
  );
};

export default memo(SignInContainer);
