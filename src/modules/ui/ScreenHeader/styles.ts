import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 50,
  },
  btnWrap: {
    minWidth: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrapLeft: {
    justifyContent: 'flex-start',
  },
  btnWrapRight: {
    justifyContent: 'flex-end',
  },
  leftIcon: {
    width: 23,
    height: 23,
  },
  topLine: {
    width: 70,
    height: 4,
    borderRadius: 13,
    backgroundColor: colors.neutral_2,
    marginTop: -10,
  },
});
