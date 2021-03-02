import { StyleSheet } from 'react-native';

import { TEXT_TYPES, FONTS, FONT_SIZE, COLORS } from '@/utils/constants/styles';
// import { COLORS_HELPERS } from 'utils/helpers/styles';

export default StyleSheet.create({
  [TEXT_TYPES.TITLE]: {
    fontFamily: FONTS.REGULAR,
    fontSize: FONT_SIZE.LARGE,
    color: COLORS.BLACK,
  },
  // [TEXT_TYPES.TITLE_ADAPTIVE]: {
  //   fontFamily: FONTS.REGULAR,
  //   fontSize: FONT_SIZE.LARGE,
  //   color: COLORS_HELPERS.getPrimaryTextColor(isDarkMode),
  // },
  [TEXT_TYPES.TITLE_BOLD]: {
    fontFamily: FONTS.BOLD,
    fontSize: FONT_SIZE.LARGE,
    color: COLORS.BLACK,
  },
  // [TEXT_TYPES.TITLE_BOLD_ADAPTIVE]: {
  //   fontFamily: FONTS.BOLD,
  //   fontSize: FONT_SIZE.LARGE,
  //   color: COLORS_HELPERS.getPrimaryTextColor(isDarkMode),
  // },
  [TEXT_TYPES.PRIMARY]: {
    fontFamily: FONTS.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.BLACK,
  },
  [TEXT_TYPES.PRIMARY_BOLD]: {
    fontFamily: FONTS.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.BLACK,
  },
  [TEXT_TYPES.MAIN]: {
    fontFamily: FONTS.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLORS.BLACK,
  },
  [TEXT_TYPES.MAIN_BOLD]: {
    fontFamily: FONTS.BOLD,
    fontSize: FONT_SIZE.REGULAR,
    color: COLORS.BLACK,
  },
  [TEXT_TYPES.SUBTITLE]: {
    fontFamily: FONTS.LIGHT,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.DARK_GRAY,
  },
  [TEXT_TYPES.SUBTITLE_BOLD]: {
    fontFamily: FONTS.BOLD,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.DARK_GRAY,
  },
  [TEXT_TYPES.LARGE_TITLE]: {
    fontFamily: FONTS.REGULAR,
    fontSize: FONT_SIZE.EXTRA_LARGE,
    color: COLORS.BLACK,
  },
  [TEXT_TYPES.LARGE_TITLE_BOLD]: {
    fontFamily: FONTS.BOLD,
    fontSize: FONT_SIZE.EXTRA_LARGE,
    color: COLORS.BLACK,
  },
  [TEXT_TYPES.HEADER_TITLE]: {
    fontFamily: FONTS.BOLD,
    fontSize: FONT_SIZE.HEADER,
    color: COLORS.BLACK,
  },
});
