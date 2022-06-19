import { StyleSheet } from 'react-native';
import { colors } from '../../../../../theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomColor: colors.secondaryGray,
    borderBottomWidth: 1,
    minHeight: 54,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkMarkIcon: {
    width: 24,
    height: 24,
  },
  loadingWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
