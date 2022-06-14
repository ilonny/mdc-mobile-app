import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 180,
    borderWidth: 2,
    borderStyle: 'dashed',
    backgroundColor: colors.mainGray,
    borderColor: colors.secondaryGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperError: {
    borderColor: colors.red,
  },
  hiddenInputView: {
    height: 0,
    opacity: 0,
  },
  pickedImage: {
    width: '100%',
    height: '100%',
  },
  retakeIcon: {
    width: 35,
    height: 35,
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
