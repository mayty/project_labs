import { GUTTER } from '@/utils/constants/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 20,
    // marginTop: 30,
    marginBottom: GUTTER / 2,
  },
  title: {
    flexDirection: 'row',
    flex: 1,
    textAlign: 'center',
  },
  left: {
    width: 60,
    marginRight: GUTTER,
    padding: 0,
  },
  right: {
    width: 60,
    marginLeft: GUTTER,
    padding: 0,
    paddingHorizontal: 0,
  },
  secondRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginTop: -GUTTER,
    marginRight: GUTTER * 2.5,
  },
  container: {
    height: 50,
    justifyContent: 'flex-end',
  },
});
