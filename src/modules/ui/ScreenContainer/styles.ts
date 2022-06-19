import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';
import { deviceHeight, deviceWidth } from '../../device';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.totalBlack,
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: deviceWidth,
    height: deviceHeight,
  },
  container: {
    flex: 1,
  },
  areaWrapper: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 87,
    paddingHorizontal: 16,
  },
  scrollContentNoPadding: {
    paddingHorizontal: 0,
  },
  scrollContentFullscreen: {
    paddingTop: 0,
  },
  nonScrollWrapper: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: 16,
    backgroundColor: colors.totalBlack,
  },
  footerPadding: {
    paddingBottom: 16,
  },
  headerWrapper: {
    position: 'absolute',
    width: '100%',
    minHeight: 94,
    backgroundColor: colors.totalBlack,
  },
  headerWrapperBlue: {
    // backgroundColor: colors.primary,
  },
  blur: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  headerWrapperContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  headerWrapperContentRow: {
    width: '100%',
    paddingHorizontal: 16,
  },
  footerWrapperBlue: {
    // backgroundColor: colors.primary,
  },
  overlayBg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(28, 31, 33, 0.1)',
    width: deviceWidth,
    height: deviceHeight,
  },
  overlayBgSafe: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
