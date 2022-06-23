import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import { ImageSource, ImageView, Indent, Row, Typography } from '../../../ui';
import { styles } from './styles';

export const CarOptions = () => {
  return (
    <>
      <Row alignItems="flex-start" justifyContent="center">
        <View style={styles.block}>
          <View style={styles.ellipseImageWrapper}>
            <ImageView
              style={styles.ellipseImage}
              source={ImageSource.ellipse_gradient}
            />
            <ImageView size={25} source={ImageSource.bottle} />
          </View>
          <Indent height={10} />
          <Typography.BoldText color={colors.secondaryText} textAlign="center">
            {translate('waterInCabin')}
          </Typography.BoldText>
        </View>
        <View style={styles.block}>
          <View style={styles.ellipseImageWrapper}>
            <ImageView
              style={styles.ellipseImage}
              source={ImageSource.ellipse_gradient}
            />
            <ImageView size={25} source={ImageSource.battery} />
          </View>
          <Indent height={10} />
          <Typography.BoldText color={colors.secondaryText} textAlign="center">
            {translate('chargeForPhones')}
          </Typography.BoldText>
        </View>
        <View style={styles.block}>
          <View style={styles.ellipseImageWrapper}>
            <ImageView
              style={styles.ellipseImage}
              source={ImageSource.ellipse_gradient}
            />
            <ImageView size={25} source={ImageSource.bt} />
          </View>
          <Indent height={10} />
          <Typography.BoldText color={colors.secondaryText} textAlign="center">
            {translate('btAudio')}
          </Typography.BoldText>
        </View>
      </Row>
      <Indent height={30} />
    </>
  );
};
