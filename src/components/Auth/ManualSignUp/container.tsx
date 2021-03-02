import React, { FC, memo, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

// components
import SignUpView from './component';

// types
import { AuthStackParams } from '@/types/routes';

// utils
import { AUTH_STACK } from '@/utils/constants/routes';

type SignUpContainerProps = {
  navigation: NavigationProp<AuthStackParams, AUTH_STACK.MANUAL_SIGN_IN>;
};

const SignUpContainer: FC<SignUpContainerProps> = (props) => {
  const {} = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const signUp = () => {};

  const loading = false;

  const disableSignUp = !email || !password || !confirmPassword || confirmPassword !== password;

  return (
    <SignUpView
      signUp={signUp}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      onEmailChanged={setEmail}
      onPasswordChanged={setPassword}
      onConfirmPasswordChanged={setConfirmPassword}
      disableSignUp={disableSignUp}
      loading={loading}
    />
  );
};

export default memo(SignUpContainer);
