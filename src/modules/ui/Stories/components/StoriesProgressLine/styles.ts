import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 5,
  },
  secondaryLine: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#6D7380',
  },
  primaryLine: {
    width: 0,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
  },
});
