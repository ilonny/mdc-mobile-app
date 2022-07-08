import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export const Divider: React.FC<{ margin: number }> = ({ margin }) => {
  return <View style={[styles.line, { marginVertical: margin }]} />;
};
