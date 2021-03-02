import React, { FC, memo, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

// components
import SignInView from './component';

// types
import { AuthStackParams } from '@/types/routes';

// utils
import { AUTH_STACK } from '@/utils/constants/routes';

type SignInContainerProps = {
  navigation: NavigationProp<AuthStackParams, AUTH_STACK.MANUAL_SIGN_IN>;
};

const SignInContainer: FC<SignInContainerProps> = (props) => {
  const {} = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = () => {};
  const loading = false;

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
