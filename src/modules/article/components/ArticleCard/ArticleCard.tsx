import { Text, View } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import {
  ImageSource,
  ImageView,
  Indent,
  Row,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { TArticle } from '../../types';
import { styles } from './styles';
import { translate } from '../../../translation';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../../navigation/types';
import { colors } from '../../../../theme';

type TProps = {
  data: TArticle;
  isBig?: boolean;
};

export const ArticleCard = (props: TProps) => {
  const { data, isBig } = props;
  const navigation = useNavigation<NavigationProps>();

  const onPress = useCallback(() => {
    navigation.navigate('ArticleDetailScreen', { id: data.id });
  }, [data]);

  return (
    <TouchableFeedback onPress={onPress}>
      <View style={isBig ? styles.wrapperBig : styles.wrapper}>
        <View style={styles.imageWrapper}>
          <ImageView style={styles.image} href source={data.image} />
        </View>
        <View style={styles.contentWrapper}>
          <Typography.BoldText fontSize={17}>{data.title}</Typography.BoldText>
          {/* <Indent height={5} />
          <Row>
            <ImageView source={ImageSource.clock} size={18} />
            <Indent width={5} />
            <Typography.MainText color={colors.secondaryGray}>
              {data.reading_time}
            </Typography.MainText>
          </Row> */}
        </View>
      </View>
    </TouchableFeedback>
  );
};
