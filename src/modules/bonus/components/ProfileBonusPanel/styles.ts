import { StyleSheet } from 'react-native';
import { colors } from '../../../../theme';

export const styles = StyleSheet.create({
  bonusLineWrapper: {
    height: 4,
    width: '100%',
  },
  bonusLine: {
    width: '100%',
    height: 4,
    backgroundColor: colors.totalBlack,
  },
  bonusLineActive: {
    backgroundColor: colors.lightGreen,
    position: 'absolute',
    left: 0,
    top: 0,
    height: 4,
  },
});
