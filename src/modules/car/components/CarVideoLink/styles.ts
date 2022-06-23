import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../../device';

export const styles = StyleSheet.create({
  imageWrapper: {
    marginLeft: -16,
    width: deviceWidth,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
