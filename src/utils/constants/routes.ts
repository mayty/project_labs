export enum AUTH_STACK {
  SIGN_IN = 'sign-in-screen',
  SIGN_UP = 'sign-un-screen',
  MANUAL_SIGN_IN = 'manual-sign-in',
  MANUAL_SIGN_UP = 'manual-sign-up',
}

export enum MAIN_DRAWER {
  HOME = 'home-stack',
  SEARCH = 'search-screen',
  SETTINGS = 'settings-stack',
}

export enum HOME_STACK {
  HOME = 'home-screen',
  NOTE_DETAILS_NEW = 'note-details-new-screen',
}

export enum SETTINGS_STACK {
  MENU = 'settings-menu',
  ACCOUNT = 'settings-account',
  APPEARANCE = 'settings-appearance',
  NOTIFICATIONS = 'settings-notifications',
  ABOUT = 'settings-about',
}

export enum SHARED_STACK {
  UNAVAILABLE = 'unavailable-screen',
  NOTE_DETAILS_EDIT = 'note-details-edit-screen',
}

export enum ROOT_STACK {
  MAIN = 'main-router',
  AUTH = 'auth-router',
  SHARED = 'shared-router',
}

export const ROUTE_NAMES = {
  [HOME_STACK.HOME]: 'Notes',
  [SETTINGS_STACK.MENU]: 'Settings',
  [SETTINGS_STACK.ACCOUNT]: 'Account',
  [SETTINGS_STACK.APPEARANCE]: 'Appearance',
  [SETTINGS_STACK.NOTIFICATIONS]: 'Notifications',
  [SETTINGS_STACK.ABOUT]: 'About',
};
