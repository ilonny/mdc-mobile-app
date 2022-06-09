import React from 'react';
import { View } from 'react-native';

export const Indent: React.FC<{ height?: number; width?: number }> = ({
  height,
  width,
}) => {
  return <View style={{ height, width }} />;
};
