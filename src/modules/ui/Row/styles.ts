import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../device';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperColumn: {
    flexDirection: 'column',
  },
  wrapperNegativeMargin: {
    marginHorizontal: -16,
    paddingHorizontal: 8,
    width: deviceWidth,
  },
});
