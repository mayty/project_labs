import { StyleProp, TextStyle } from 'react-native';

// utils
import { COLORS } from '../constants/styles';

// types
import { ColorHelper, TextType } from '@/types/styles';

// styles
import textStyles from '@/components/Shared/Text/styles';

const getBackgroundColor: ColorHelper = (isDarkMode) =>
  isDarkMode ? COLORS.BLACK : COLORS.LIGHT_GRAY;

const getPrimaryColor: ColorHelper = (isDarkMode) =>
  isDarkMode ? COLORS.DARK_GRAY : COLORS.LIGHT_GRAY;

const getPrimaryTextColor: ColorHelper = (isDarkMode) => (isDarkMode ? COLORS.WHITE : COLORS.BLACK);

const getSecondaryTextColor: ColorHelper = (isDarkMode) =>
  isDarkMode ? COLORS.LIGHT_GRAY : COLORS.DARK_GRAY;

const getTextColorByBackground = (color: string) =>
  color === COLORS.GRAY_BLUE ||
  color === COLORS.PURPLE ||
  color === COLORS.BLUE_PURPLE ||
  color === COLORS.GRAY ||
  color === COLORS.GREEN ||
  color === COLORS.BLUE ||
  color === COLORS.BLACK ||
  color === COLORS.RED
    ? COLORS.WHITE
    : COLORS.BLACK;

export const getCheckboxColorByBackground = (color: string) =>
  color === COLORS.GRAY_BLUE ||
  color === COLORS.PURPLE ||
  color === COLORS.BLUE_PURPLE ||
  color === COLORS.GRAY ||
  color === COLORS.GREEN ||
  color === COLORS.BLUE ||
  color === COLORS.BLACK ||
  color === COLORS.RED
    ? COLORS.WHITE
    : COLORS.BLUE;

export const getBorderColorByBackground = (isSelected?: boolean) =>
  isSelected ? COLORS.BLUE : COLORS.BLACK;

export const COLORS_HELPERS = {
  getBackgroundColor,
  getPrimaryColor,
  getPrimaryTextColor,
  getSecondaryTextColor,
  getTextColorByBackground,
};

export const getTextStyleByType: (textType: TextType) => StyleProp<TextStyle> = (textType) =>
  textStyles[textType];
