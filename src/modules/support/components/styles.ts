import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';


export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 0,
    backgroundColor: colors.totalBlack,
    justifyContent: 'flex-start',
    padding: 16,
  },
  touchablePanel: {
    borderWidth: 3,
    borderColor: colors.mainGray,
  },
  touchablePanelActive: {
    borderColor: '#fff',
  },
  loaderWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  visaIcon: {
    width: 53,
    height: 13,
  },
});
