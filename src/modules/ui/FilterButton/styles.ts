import { colors } from './../../../theme/colors';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainGray,
  },
  wrapperActive: {
    backgroundColor: '#fff',
  },
});
