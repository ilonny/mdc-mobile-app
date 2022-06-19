import { colors } from './../../../../theme/colors';
import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../../device';

export const styles = StyleSheet.create({
  wrapper: {
    width: deviceWidth / 2,
    padding: 2.5,
  },
  wrapperBig: {
    width: '100%',
  },
  imageWrapper: {
    width: '100%',
    height: 170,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    padding: 20,
    backgroundColor: colors.mainGray,
  },
  badge: {
    flex: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.red,
  },
});
