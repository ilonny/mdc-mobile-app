import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  tabWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: colors.secondaryGray,
  },
  tab: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  tabActive: {
    borderBottomColor: '#fff',
  },
});
