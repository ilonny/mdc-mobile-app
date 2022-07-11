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
