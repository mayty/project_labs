import {
  AUTH_STACK,
  HOME_STACK,
  MAIN_DRAWER,
  ROOT_STACK,
  SETTINGS_STACK,
  SHARED_STACK,
} from '@/utils/constants/routes';

// types
import { ID } from '@/types/shared';

export type AuthStackParams = {
  [AUTH_STACK.SIGN_IN]: undefined;
  [AUTH_STACK.SIGN_UP]: undefined;
  [AUTH_STACK.MANUAL_SIGN_IN]: undefined;
  [AUTH_STACK.MANUAL_SIGN_UP]: undefined;
};

export type MainDrawerParams = {
  [MAIN_DRAWER.HOME]: undefined;
  [MAIN_DRAWER.SEARCH]: undefined;
  [MAIN_DRAWER.SETTINGS]: undefined;
};

export type HomeStackParams = {
  [HOME_STACK.HOME]: undefined;
  [HOME_STACK.NOTE_DETAILS_NEW]: undefined;
};

export type SettingsStackParams = {
  [SETTINGS_STACK.MENU]: undefined;
  [SETTINGS_STACK.ACCOUNT]: undefined;
  [SETTINGS_STACK.APPEARANCE]: undefined;
  [SETTINGS_STACK.NOTIFICATIONS]: undefined;
  [SETTINGS_STACK.ABOUT]: undefined;
};

export type SharedStackParams = {
  [SHARED_STACK.UNAVAILABLE]: {
    message?: string;
    onClose?: () => void;
  };
  [SHARED_STACK.NOTE_DETAILS_EDIT]: { id: ID };
};

export type RootStackParams = {
  [ROOT_STACK.MAIN]: undefined;
  [ROOT_STACK.AUTH]: undefined;
  [ROOT_STACK.SHARED]: undefined;
};
