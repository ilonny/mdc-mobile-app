import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  wrapper: {
    // flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperDisabled: {
    backgroundColor: colors.primaryDisabled,
  },
});
