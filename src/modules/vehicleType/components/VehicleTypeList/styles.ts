import { colors } from './../../../../theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemWrap: {
    width: '50%',
    height: 130,
    padding: 2.5,
  },
  itemWrapInner: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.mainGray,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrap: {
    width: '100%',
    height: 84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
