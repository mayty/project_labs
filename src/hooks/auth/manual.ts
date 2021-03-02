import { useState } from 'react';

// api
import UserController from '@/api/controllers/users';

// services
import { signInManually, signUpManually } from '@/utils/services/auth/manual';
import { storeToken, storeUserId } from '@/utils/services/storage';

// types
import { SignManuallyOptions, SignManuallyResult } from '@/types/hooks';
import { AccountType } from '@/types/shared';

export const useSignUpManually: (options: SignManuallyOptions) => SignManuallyResult = ({
  email,
  password,
  onError,
  onSuccess,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const signUp = async () => {
    setLoading(true);

    const result = await signUpManually(email, password, (error) => {
      setLoading(false);
      onError && onError(error);
    });

    if (result) {
      await UserController.createUser(result);
      const token = await result.user.getIdToken();
      await storeToken(token);
      await storeUserId(result.user.uid);

      setLoading(false);
      onSuccess(
        token,
        result.user.uid,
        result.additionalUserInfo?.providerId as AccountType,
        result.user.email as string,
      );
    }
  };

  return [signUp, { loading }];
};

export const useSignInManually: (options: SignManuallyOptions) => SignManuallyResult = ({
  email,
  password,
  onError,
  onSuccess,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = async () => {
    setLoading(true);

    const result = await signInManually(email, password, (error) => {
      setLoading(false);
      onError && onError(error);
    });

    if (result) {
      const token = await result.user.getIdToken();
      await storeToken(token);
      await storeUserId(result.user.uid);

      setLoading(false);
      onSuccess(
        token,
        result.user.uid,
        result.additionalUserInfo?.providerId as AccountType,
        result.user.email as string,
      );
    }
  };

  return [signIn, { loading }];
};
