import { useState } from 'react';

// api
import UserController from '@/api/controllers/users';

// utils
import { signInWithGoogle } from '@/utils/services/auth/social';
import { storeToken, storeUserId } from '@/utils/services/storage';

// types
import { SocialSignInOptions, SignManuallyResult } from '@/types/hooks';
import { AccountType } from '@/types/shared';

export const useSignInGoogle: (options: SocialSignInOptions) => SignManuallyResult = ({
  onError,
  onSuccess,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = async () => {
    setLoading(true);
    const user = await signInWithGoogle(onError);

    if (user) {
      const firestoreUser = await UserController.getUser(user);

      if (firestoreUser) {
        await UserController.createUser(user);
      }

      const token = await user.user.getIdToken();
      await storeToken(token);
      await storeUserId(user.user.uid);

      setLoading(false);
      return onSuccess(
        token,
        user.user.uid,
        user.additionalUserInfo?.providerId as AccountType,
        user.user.email as string,
      );
    }

    setLoading(false);
  };

  return [signIn, { loading }];
};
