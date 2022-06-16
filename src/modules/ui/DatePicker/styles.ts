import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  touchableWrapper: {
    position: 'absolute',
    width: '20%',
    height: '100%',
    right: 0,
  },
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalBottomContent: {
    backgroundColor: colors.mainGray,
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 50,
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
  monthTitleStyle: {
    fontFamily: 'Inter-ExtraBold',
    fontWeight: '800',
    color: '#fff',
    fontSize: 17,
  },
  yearTitleStyle: {
    fontFamily: 'Inter-ExtraBold',
    fontWeight: '800',
    color: '#fff',
    fontSize: 17,
  },
  iconCalendar: {
    width: 24,
    height: 24,
  },
  dayLabelsWrapper: {
    borderTopColor: 'transparent',
    borderBottomColor: colors.secondaryText,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  calendarHeaderDay: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    color: colors.secondaryText,
    fontSize: 17,
  },
  selectedDayStyle: {
    backgroundColor: '#fff',
    color: colors.totalBlack,
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  todayTextStyle: {
    color: colors.totalBlack,
  },
  calendarTextStyle: {
    fontFamily: 'Inter-Regular',
    color: '#fff',
  },
});
