import { StyleSheet } from 'react-native';

import { COLORS, FONTS, GUTTER } from '@/utils/constants/styles';

export default StyleSheet.create({
  input: {
    fontFamily: FONTS.REGULAR,
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
    marginBottom: GUTTER * 2,
    paddingBottom: GUTTER / 2,
  },
});
