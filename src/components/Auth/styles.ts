import { StyleSheet } from 'react-native';

import { COLORS, GUTTER, DIMENSIONS } from '@/utils/constants/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  socialButton: {
    borderColor: COLORS.BLACK,
    borderWidth: 2,
    marginVertical: GUTTER / 2,
    width: DIMENSIONS.SCREEN_WIDTH / 2,
    height: 46,
  },
  title: {
    marginTop: GUTTER * 9,
  },
  socialContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: GUTTER * 9,
  },
  separator: {
    width: DIMENSIONS.SCREEN_WIDTH * 0.45,
    height: 2,
    // backgroundColor: COLORS.BLACK,
    marginVertical: GUTTER * 2,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  helpButton: {
    marginBottom: GUTTER * 5,
  },
  helpText: {
    textDecorationLine: 'underline',
  },
  inputsContainer: {
    width: DIMENSIONS.SCREEN_WIDTH * 0.6,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: GUTTER * 9,
  },
  disabledButton: {
    borderColor: COLORS.DARK_GRAY,
  },
});
