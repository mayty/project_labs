import React, { FC, memo, useCallback, useContext, useMemo, useState } from 'react';

// types
import { AccountType, ID } from '@/types/shared';

interface AuthContextValue {
  token?: string;
  id?: ID;
  email?: string;
  accountType?: AccountType;
  isLoading: boolean;
  helpers: {
    signIn: (token?: string, id?: ID, accountType?: AccountType, email?: string) => void;
    signOut: () => void;
  };
}

const defaultContextValue: AuthContextValue = {
  token: undefined,
  id: undefined,
  email: undefined,
  accountType: undefined,
  isLoading: true,
  helpers: {
    signIn: (token) => console.log(token),
    signOut: () => null,
  },
};

export const AuthContext = React.createContext<AuthContextValue>(defaultContextValue);

interface AuthContextProviderProps {
  children: JSX.Element;
}

const ProviderComponent: FC<AuthContextProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>();
  const [id, setId] = useState<ID | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [accountType, setAccountType] = useState<AccountType>();
  const [email, setEmail] = useState<string>();

  const signIn = useCallback(
    (newToken?: string, currentId?: ID, newAccountType?: AccountType, newEmail?: string) => {
      setId(currentId);
      setToken(newToken);
      setAccountType(newAccountType);
      setEmail(newEmail);
      setLoading(false);
    },
    [],
  );

  const signOut = useCallback(() => {
    setId(undefined);
    setToken(undefined);
    setAccountType(undefined);
    setEmail(undefined);
    setLoading(false);
  }, []);

  const contextValue = useMemo(
    () => ({ token, id, accountType, email, isLoading: loading, helpers: { signIn, signOut } }),
    [token, id, accountType, email, loading, signIn, signOut],
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const AuthContextProvider = memo(ProviderComponent);

export const useAuthContext = () => useContext(AuthContext);

export const useAuthHelpers = () => useContext(AuthContext).helpers;
export const useAuthToken = () => useContext(AuthContext).token as string;
export const useAuthId = () => useContext(AuthContext).id as ID;
export const useAccountType = () => useContext(AuthContext).accountType as AccountType;
export const useAuthEmail = () => useContext(AuthContext).email as string;
export const useSignedIn = () => {
  const authContext = useContext(AuthContext);

  return authContext.token && authContext.id;
};
