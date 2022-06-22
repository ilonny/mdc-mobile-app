import React, { useMemo } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { API_URL } from '../../../httpClient/constants';
import { ImageSource, ImageView, Typography } from '../../../ui';
import { styles } from './styles';

type TProps = {
  sources: string[];
};

export const CarGallery = (props: TProps) => {
  const { sources = [] } = props;

  const hrefs = useMemo(() => {
    return sources.reverse().map(s => {
      return `${API_URL}/${s}`;
    });
  }, [sources]);

  console.log('hrefs', hrefs);
  console.log('sources', sources);
  if (!hrefs.length) {
    return <></>;
  }
  return (
    <View style={styles.wrapper}>
      <Swiper
        showsButtons
        showsPagination={false}
        nextButton={<ImageView source={ImageSource.next_button} size={36} />}
        prevButton={<ImageView source={ImageSource.prev_button} size={36} />}>
        {hrefs.map(href => {
          return (
            <View style={styles.slide} key={href}>
              <ImageView style={styles.image} href source={href} />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};
