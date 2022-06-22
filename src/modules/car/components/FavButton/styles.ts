import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inCarCardWrapper: {
    position: 'relative',
    right: 0,
    top: 0,
    width: '100%',
    height: 'auto',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  imageWrapper: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
