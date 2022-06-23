import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../../device';

export const styles = StyleSheet.create({
  imageWrapper: {
    height: 120,
    marginTop: -16,
    marginLeft: -16,
    width: deviceWidth - 32,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
