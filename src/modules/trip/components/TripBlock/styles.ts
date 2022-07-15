import { colors } from './../../../../theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: colors.mainGray,
  },
  bottomBlock: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
  },
  bottomBlockSuccess: {
    backgroundColor: '#fff',
  },
});
