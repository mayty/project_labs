import { BUTTON_TYPES, TEXT_TYPES } from '@/utils/constants/styles';

export type ColorHelper = (isDarkMode: boolean) => string;

export type TextType = typeof TEXT_TYPES[keyof typeof TEXT_TYPES];
export type ButtonType = typeof BUTTON_TYPES[keyof typeof BUTTON_TYPES];
