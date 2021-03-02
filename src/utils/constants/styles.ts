import { Dimensions as RNDimensions } from 'react-native';

const screen = RNDimensions.get('screen');
const window = RNDimensions.get('screen');

export const DIMENSIONS = {
  SCREEN_HEIGHT: screen.height,
  SCREEN_WIDTH: screen.width,
  WINDOW_HEIGHT: window.height,
  WINDOW_WIDTH: window.width,
};

export enum COLORS {
  BLACK = '#000000',
  WHITE = '#FFFFFF',
  RED = '#E74C3F',
  LIGHT_GRAY = '#ECF0F1',
  BLUE = '#2980B9',
  DARK_GRAY = '#2F3542',
  BLUR = 'rgba(0,0,0,0.1)',
  YELLOW = '#F1C40F',
  GREEN = '#009432',
  LIGHT_GREEN = '#B8E994',
  ORANGE = '#E67E22',
  LIGHT_BLUE = '#82CCDD',
  PURPLE = '#6D214F',
  LIGHT_PURPLE = '#D6A2E8',
  GRAY_BLUE = '#58B19F',
  GRAY = '#535C68',
  LIGHT_YELLOW = '#F7D794',
  BLUE_PURPLE = '#574B90',
  LIGHT_RED = '#EA8685',
}

export enum FONTS {
  LIGHT = 'Lato-Light',
  REGULAR = 'Lato-Regular',
  BOLD = 'Lato-Bold',
}

export enum FONT_SIZE {
  EXTRA_LARGE = 34,
  HEADER = 23,
  LARGE = 17,
  MEDIUM = 15,
  REGULAR = 13,
  SMALL = 10,
}

export const GUTTER = 16;
export const OPACITY = 0.5;
export const BORDER_RADIUS = 10;
export const DEFAULT_ICON_SIZE = 34;

// adaptive means auto dark-mode color support
export enum TEXT_TYPES {
  TITLE = 'title',
  // TITLE_ADAPTIVE = 'title-adaptive',
  TITLE_BOLD = 'title-bold',
  // TITLE_BOLD_ADAPTIVE = 'title-bold-adaptive',
  MAIN = 'main',
  // MAIN_ADAPTIVE = 'main-adaptive',
  MAIN_BOLD = 'main-bold',
  // MAIN_BOLD_ADAPTIVE = 'main-bold-adaptive',
  PRIMARY = 'primary',
  // PRIMARY_ADAPTIVE = 'primary-adaptive',
  PRIMARY_BOLD = 'primary-bold',
  // PRIMARY_BOLD_ADAPTIVE = 'primary-bold-adaptive',
  SUBTITLE = 'subtitle',
  // SUBTITLE_ADAPTIVE = 'subtitle-adaptive',
  SUBTITLE_BOLD = 'subtitle-bold',
  // SUBTITLE_ADAPTIVE_BOLD = 'subtitle-bold-adaptive',
  LARGE_TITLE = 'large-title-bold',
  LARGE_TITLE_BOLD = 'large-title',
  HEADER_TITLE = 'header-title',
}

export enum BUTTON_TYPES {
  TEXT = 'text',
  ICON = 'icon',
  TEXT_ICON = 'text-icon',
  RADIO = 'radio',
}

export const NOTE_HEIGHT = 200;
export const NOTE_WIDTH = DIMENSIONS.SCREEN_WIDTH * 0.4;
