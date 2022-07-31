import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import { ImageSource, ImageView, Indent, Row, Typography } from '../../../ui';
import { styles } from './styles';

export const PartnersOptions = () => {
  return (
    <>
      <Row alignItems="flex-start" justifyContent="center">
        <View style={styles.block}>
          <View style={styles.ellipseImageWrapper}>
            <ImageView
              style={styles.ellipseImage}
              source={ImageSource.ellipse_gradient}
            />
            <ImageView size={25} source={ImageSource.rest} />
          </View>
          <Indent height={10} />
          <Typography.BoldText color={colors.secondaryText} textAlign="center">
            {translate('Restaurants')}
          </Typography.BoldText>
        </View>
        <View style={styles.block}>
          <View style={styles.ellipseImageWrapper}>
            <ImageView
              style={styles.ellipseImage}
              source={ImageSource.ellipse_gradient}
            />
            <ImageView size={25} source={ImageSource.car} />
          </View>
          <Indent height={10} />
          <Typography.BoldText color={colors.secondaryText} textAlign="center">
            {translate('Detailing')}
          </Typography.BoldText>
        </View>
        <View style={styles.block}>
          <View style={styles.ellipseImageWrapper}>
            <ImageView
              style={styles.ellipseImage}
              source={ImageSource.ellipse_gradient}
            />
            <ImageView size={25} source={ImageSource.scissors} />
          </View>
          <Indent height={10} />
          <Typography.BoldText color={colors.secondaryText} textAlign="center">
            {translate('Barbershops')}
          </Typography.BoldText>
        </View>
      </Row>
      <Indent height={20} />
      <Row alignItems="flex-start" justifyContent="center">
        <View style={[styles.block, styles.block2]}>
          <View style={styles.ellipseImageWrapper}>
            <ImageView
              style={styles.ellipseImage}
              source={ImageSource.ellipse_gradient}
            />
            <ImageView size={25} source={ImageSource.houseline} />
          </View>
          <Indent height={10} />
          <Typography.BoldText color={colors.secondaryText} textAlign="center">
            {translate('Realty')}
          </Typography.BoldText>
        </View>
        <View style={[styles.block, styles.block2]}>
          <View style={styles.ellipseImageWrapper}>
            <ImageView
              style={styles.ellipseImage}
              source={ImageSource.ellipse_gradient}
            />
            <ImageView size={25} source={ImageSource.bed} />
          </View>
          <Indent height={10} />
          <Typography.BoldText color={colors.secondaryText} textAlign="center">
            {translate('Hotels')}
          </Typography.BoldText>
        </View>
        <View style={[styles.block, styles.block2]}>
          <View style={styles.ellipseImageWrapper}>
            <ImageView
              style={styles.ellipseImage}
              source={ImageSource.ellipse_gradient}
            />
            <ImageView style={styles.mrwIcon} source={ImageSource.mrw} />
          </View>
          <Indent height={10} />
          <Typography.BoldText color={colors.secondaryText} textAlign="center">
            {translate('MoscowRaceway')}
          </Typography.BoldText>
        </View>
      </Row>
    </>
  );
};
