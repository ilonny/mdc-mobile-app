import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 54,
    // borderRadius: 12,
    // backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperDisabled: {
    backgroundColor: 'gray',
  },
  wrapperBlack: {
    backgroundColor: colors.totalBlack,
  },
  wrapperWhite: {
    backgroundColor: '#fff',
  },
  wrapperBlue: {
    // backgroundColor: colors.primary_tone_3,
  },
  wrapperTransparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  border: {
    borderWidth: 2,
    borderColor: '#fff',
    height: 58,
  },
  smallHeightWrapper: {
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
  },
});
