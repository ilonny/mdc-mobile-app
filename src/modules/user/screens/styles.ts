import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 64,
  },
  fullWidth: {
    width: '100%',
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 80,
    height: 80,
    // lineHeight: 38,
    fontSize: 80,
    borderWidth: 0,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    color: '#fff',
  },
  focusCell: {
    borderColor: '#000',
  },
});
