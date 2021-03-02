import { StyleSheet } from 'react-native';

import { BORDER_RADIUS, COLORS, GUTTER } from '@/utils/constants/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  button: {
    position: 'absolute',
    bottom: GUTTER * 4,
    marginTop: GUTTER * 5,
    borderRadius: BORDER_RADIUS * 2,
    height: BORDER_RADIUS * 4,
    borderWidth: 2,
    borderColor: COLORS.BLACK,
    paddingHorizontal: BORDER_RADIUS * 2,
  },
  close: {
    position: 'absolute',
    top: GUTTER * 2,
    right: GUTTER,
  },
});
