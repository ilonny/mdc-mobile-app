import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

export const FullScreenLoader = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator />
    </View>
  );
};
