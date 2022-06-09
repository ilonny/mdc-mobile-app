import { colors } from '../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screenTitle: {
    fontFamily: 'Inter-ExtraBold',
    fontWeight: '700',
    fontSize: 34,
    color: '#fff',
    lineHeight: 40,
  },
  screenTitleSmall: {
    fontSize: 24,
  },
  screenTitlePrimary: {
    color: '#fff',
  },
  screenTitleWhite: {
    color: '#fff',
  },
  titleDescription: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    fontSize: 17,
    // color: colors.neutral,
    lineHeight: 25,
  },
  inputLabel: {
    // color: colors.neutral,
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  inputLabelFocused: {
    // color: colors.primary,
  },
  mainText: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  secondaryButtonText: {
    // color: colors.primary,
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    fontSize: 16,
  },
  secondaryButtonTextBold: {
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
  },
  grayBoldText: {
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    fontSize: 16,
    // color: colors.neutral,
  },
  boldText: {
    fontFamily: 'Inter-Bold',
    fontWeight: '600',
    color: '#fff',
  },
  secondaryButtonTextWhite: {
    color: '#fff',
  },
});
