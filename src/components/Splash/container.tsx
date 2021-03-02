import React, { memo, useEffect } from 'react';

import SplashView from './component';

// api
import { FirestoreController } from '@/api';

// contexts
import { useAuthHelpers } from '@/contexts/AuthContext';

// utils
import { getToken, getUserId } from '@/utils/services/storage';

const SplashContainer = () => {
  const { signIn } = useAuthHelpers();

  useEffect(() => {
    (async () => {
      const token = await getToken();
      const id = await getUserId();
      const user = await FirestoreController.getUserById(id as string);

      setTimeout(signIn, 2000, token, id, user?.accountType, user?.email);
    })();
  }, [signIn]);

  return <SplashView />;
};

export default memo(SplashContainer);
