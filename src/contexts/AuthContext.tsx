import React, { FC, memo, useCallback, useContext, useMemo, useState } from 'react';

interface AuthContextValue {
  token?: string;
  isLoading: boolean;
  helpers: {
    signIn: (token: string) => void;
    signOut: () => void;
  };
}

const defaultContextValue: AuthContextValue = {
  token: undefined,
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
  const [loading, setLoading] = useState<boolean>(true);

  const signIn = useCallback((newToken: string) => {
    setToken(newToken);
    setLoading(false);
  }, []);

  const signOut = useCallback(() => {
    setToken(undefined);
    setLoading(false);
  }, []);

  const contextValue = useMemo(
    () => ({ token, isLoading: loading, helpers: { signIn, signOut } }),
    [token, loading, signIn, signOut],
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const AuthContextProvider = memo(ProviderComponent);

export const useAuthContext = () => useContext(AuthContext);

export const useAuthHelpers = () => useContext(AuthContext).helpers;
