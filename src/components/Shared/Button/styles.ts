import { StyleSheet } from 'react-native';

import { BUTTON_TYPES, GUTTER, BORDER_RADIUS, COLORS } from '@/utils/constants/styles';

const RADIO_INNER_SIZE = 20;
const RADIO_SIZE = RADIO_INNER_SIZE + 5;

export default StyleSheet.create({
  [BUTTON_TYPES.TEXT]: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: GUTTER,
    paddingVertical: GUTTER / 2,
    borderRadius: BORDER_RADIUS / 2,
  },
  [BUTTON_TYPES.ICON]: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: GUTTER,
    borderRadius: BORDER_RADIUS / 2,
  },
  [BUTTON_TYPES.TEXT_ICON]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: GUTTER,
    paddingVertical: GUTTER / 2,
    borderRadius: BORDER_RADIUS / 2,
  },
  [BUTTON_TYPES.RADIO]: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: GUTTER,
    paddingVertical: GUTTER / 2,
  },
  iconStyle: {
    marginLeft: GUTTER,
  },
  disabled: {
    backgroundColor: COLORS.BLUR,
  },
  loading: {
    alignSelf: 'center',
  },
  radioContainer: {
    width: RADIO_SIZE,
    height: RADIO_SIZE,
    borderRadius: RADIO_SIZE / 2,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: GUTTER / 2,
  },
  radioActive: {
    width: RADIO_INNER_SIZE,
    height: RADIO_INNER_SIZE,
    borderRadius: RADIO_INNER_SIZE / 2,
    backgroundColor: COLORS.BLACK,
  },
});
