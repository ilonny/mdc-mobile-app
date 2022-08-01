import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { ImageSource, ImageView, PromoBanner, Row } from '../../../ui';
import { usePromoblockList } from '../../hooks';
import { styles } from './styles';

export const PromoblockSwiper = () => {
  const { promoblockList, promoblockListLoading } = usePromoblockList();
  if (promoblockListLoading) {
    return (
      <Row alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Row>
    );
  }
  if (!promoblockList?.length) return <></>;
  return (
    <View style={styles.wrapper}>
      <Swiper
        showsButtons={promoblockList?.length > 1}
        showsPagination={false}
        nextButton={<ImageView source={ImageSource.next_button} size={26} />}
        prevButton={<ImageView source={ImageSource.prev_button} size={26} />}>
        {promoblockList.map(p => {
          return <PromoBanner key={p.id} data={p} />;
        })}
      </Swiper>
    </View>
  );
};
