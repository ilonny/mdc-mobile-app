import { StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth } from '../../device';

export const styles = StyleSheet.create({
  storiesWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  progressBarWrapper: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    top: 0,
    paddingHorizontal: 20,
  },
  contentWrapper: {
    flex: 1,
  },
  touchableAreas: {
    top: 100,
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight - 300,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
  },
  leftTouch: {
    width: '30%',
    height: '100%',
    // backgroundColor: 'red',
  },
  rightTouch: {
    width: '70%',
    height: '100%',
    top: 0,
    // backgroundColor: 'blue',
  },
});
