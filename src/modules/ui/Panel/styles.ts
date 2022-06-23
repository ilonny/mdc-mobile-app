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
});
