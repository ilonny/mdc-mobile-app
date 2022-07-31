import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Linking, View } from 'react-native';
import { NavigationProps } from '../../../navigation/types';
import { TPromoblock } from '../../promoblock/types';
import { ImageSource, ImageView } from '../ImageView';
import { TouchableFeedback } from '../TouchableFeedback';
import { Typography } from '../Typography';
import { styles } from './styles';

type TProps = {
  data: TPromoblock;
};

export const PromoBanner = (props: TProps) => {
  const { data } = props;
  const navigation = useNavigation<NavigationProps>();

  const onPress = useCallback(() => {
    if (data?.link) {
      try {
        Linking.openURL(data?.link);
      } catch (e) {}
    }
    if (data?.vehicle_id) {
      navigation.navigate('CarDetailScreen', {
        vehicle_id: data?.vehicle_id.toString(),
      });
    }
  }, [data, navigation]);

  return (
    <TouchableFeedback style={styles.wrapper} onPress={onPress}>
      <ImageView style={styles.image} href source={data.image} />
      <View style={styles.text}>
        <Typography.MainText>{data.text || ''}</Typography.MainText>
      </View>
    </TouchableFeedback>
  );
};
