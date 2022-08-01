import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
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

  const mediaComp = useMemo(() => {
    if (data?.image) {
      return <ImageView style={styles.image} href source={data.image} />;
    }
    if (data?.video) {
      console.log('data?.video', data?.video);
      return (
        <Video
          style={styles.image}
          muted
          source={{ uri: data?.video }}
          resizeMode="cover"
          repeat
        />
      );
    }
    return <></>;
  }, [data]);

  return (
    <TouchableFeedback style={styles.wrapper} onPress={onPress}>
      {mediaComp}
      <View style={styles.text}>
        <Typography.MainText>{data.text || ''}</Typography.MainText>
      </View>
    </TouchableFeedback>
  );
};
