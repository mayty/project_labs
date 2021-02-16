export type SignManuallyOptions = {
  email: string;
  password: string;
  onError?: (error: any) => void;
  onSuccess: (token: string) => void;
};

export type SignManuallyResult = [() => Promise<void>, { loading: boolean }];

export type SocialSignInOptions = {
  onError?: (error: any) => void;
  onSuccess: (token: string) => void;
};

export type SocialSignInResult = [() => Promise<void>, { loading: boolean }];
