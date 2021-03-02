import React, { FC, memo, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

// components
import SignUpView from './component';

// types
import { AuthStackParams } from '@/types/routes';

// utils
import { AUTH_STACK } from '@/utils/constants/routes';
import { AUTH_ERROR_TITLE } from '@/utils/constants/messages';
import { formatFirebaseError } from '@/utils/helpers/auth';

// hooks
import { useSignUpManually } from '@/hooks/auth/manual';
import { useAuthHelpers } from '@/contexts/AuthContext';
import { useErrorAlert } from '@/contexts/AlertContext';

type SignUpContainerProps = {
  navigation: NavigationProp<AuthStackParams, AUTH_STACK.MANUAL_SIGN_IN>;
};

const SignUpContainer: FC<SignUpContainerProps> = (props) => {
  const {} = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const alertError = useErrorAlert();
  const onError = (error: any) =>
    alertError(AUTH_ERROR_TITLE, formatFirebaseError(error?.message || error));

  const { signIn } = useAuthHelpers();
  const [signUp, { loading }] = useSignUpManually({
    email,
    password,
    onError,
    onSuccess: signIn,
  });

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
