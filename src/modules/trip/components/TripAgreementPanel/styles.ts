import { colors } from './../../../../theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
    backgroundColor: colors.mainGray,
    justifyContent: 'flex-start',
    paddingTop: 20,
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
