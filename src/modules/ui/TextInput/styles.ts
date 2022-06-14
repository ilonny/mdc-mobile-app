import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 60,
    backgroundColor: colors.mainGray,
    // borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.mainGray,
  },
  wrapperGray: {
    backgroundColor: colors.backgroundGray,
  },
  wrapperNoLabel: {
    // height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperSmall: {
    height: 48,
  },
  wrapperSearch: {
    paddingLeft: 50,
  },
  wrapperFocused: {
    borderColor: colors.primary,
  },
  wrapperError: {
    borderColor: colors.red,
  },
  input: {
    width: '100%',
    minHeight: 25,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#fff',
  },
  inputNoLabel: {
    height: '100%',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 13,
    width: 20,
    height: 20,
  },
  rightIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    marginTop: -5,
    width: 20,
    height: 20,
  },
  labelInputOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    // alignItems: 'center',
    left: 16,
  },
});
