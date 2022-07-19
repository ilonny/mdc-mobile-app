import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import { Indent, Typography } from '../../../ui';
import { ImageSource, ImageView } from '../../../ui/ImageView';
import { styles } from './styles';

export const StoriesSecond = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <Typography.BoldText textAlign="center" fontSize={32}>
          {translate('onboarding2Title')}
        </Typography.BoldText>
        <Indent height={22} />
        <Typography.BoldText
          textAlign="center"
          fontSize={20}
          color={colors.secondaryText}>
          {translate('onboarding2Description')}
        </Typography.BoldText>
        <View style={styles.bottomImageWrapper}>
          <ImageView
            style={styles.bottomImage}
            source={ImageSource.onboarding_2}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
