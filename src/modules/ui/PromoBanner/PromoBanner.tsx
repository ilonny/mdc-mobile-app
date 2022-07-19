import React from 'react';
import { View } from 'react-native';
import { ImageSource, ImageView } from '../ImageView';
import { Typography } from '../Typography';
import { styles } from './styles';

export const PromoBanner = () => {
  return (
    <View style={styles.wrapper}>
      <ImageView style={styles.image} source={ImageSource.promo_pic} />
      <View style={styles.text}>
        <Typography.MainText>Promo coming soon</Typography.MainText>
      </View>
    </View>
  );
};
