import { colors } from './../../../theme/colors';
import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../device';

export const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.mainGray,
  },
  wrapperFullWidth: {
    marginLeft: -16,
    width: deviceWidth,
  },
  wrapperIsRed: {
    backgroundColor: colors.red,
  },
  wrapperIsGreen: {
    backgroundColor: colors.lightGreen,
  },
  wrapperIsDashed: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.secondaryText,
    borderStyle: 'dashed',
  },
});
