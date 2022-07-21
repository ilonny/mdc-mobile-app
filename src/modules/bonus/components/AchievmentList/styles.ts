import { colors } from './../../../../theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  rowWrapper: {
    width: '100%',
  },
  modal: {
    margin: 0,
    flex: 1,
    // backgroundColor: colors.mainGray,
    justifyContent: 'flex-end',
    paddingTop: 20,
  },
  content: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 40,
  },
  modalBottomContent: {
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 0,
  },
  calendarHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    marginBottom: 5,
  },
  calendarWrapper: {
    backgroundColor: colors.mainGray,
    borderRadius: 16,
    padding: 16,
  },
});
