import { Text, View } from 'react-native';
import React, { useMemo } from 'react';
import {
  ImageView,
  Indent,
  Row,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { TCar } from '../../types';
import { styles } from './styles';
import { getFirstTariff, printPrice } from '../../helpers';
import { translate } from '../../../translation';

type TProps = {
  data: TCar;
  isBig?: boolean;
  onPress: (arg: any) => void;
};

export const CarCard = (props: TProps) => {
  const { data, isBig, onPress } = props;

  const firstTariff = useMemo(() => {
    return getFirstTariff(data.tariffs);
  }, [data]);

  return (
    <TouchableFeedback onPress={onPress}>
      <View style={isBig ? styles.wrapperBig : styles.wrapper}>
        <View style={styles.imageWrapper}>
          <ImageView style={styles.image} href source={data.main_image} />
        </View>
        <View style={styles.contentWrapper}>
          {data?.text_label && (
            <>
              <Text>
                <View style={styles.badge}>
                  <Typography.BoldText fontSize={10}>
                    {typeof data?.text_label === 'string'
                      ? data.text_label
                      : ''}{' '}
                    New
                  </Typography.BoldText>
                </View>
              </Text>
              <Indent height={10} />
            </>
          )}
          <Typography.BoldText fontSize={17}>{data.title}</Typography.BoldText>
          {!!firstTariff && (
            <>
              <Indent height={10} />
              {isBig ? (
                <Row>
                  <Typography.BoldText fontSize={30}>
                    {printPrice(
                      firstTariff.promo_price
                        ? firstTariff.promo_price
                        : firstTariff.price,
                    )}
                  </Typography.BoldText>
                  <Indent width={20} />
                  <View>
                    {firstTariff.promo_price ? (
                      <Typography.BoldText
                        fontSize={11}
                        color="rgba(255, 255, 255, 0.5)"
                        textDecorationLine="line-through">
                        {printPrice(firstTariff.price)}
                      </Typography.BoldText>
                    ) : (
                      <>
                        <Typography.BoldText> </Typography.BoldText>
                      </>
                    )}
                    <Typography.BoldText fontSize={11}>
                      {translate('perDay')}
                    </Typography.BoldText>
                  </View>
                </Row>
              ) : (
                <View>
                  {firstTariff.promo_price ? (
                    <Typography.BoldText fontSize={16}>
                      {printPrice(
                        firstTariff.promo_price
                          ? firstTariff.promo_price
                          : firstTariff.price,
                      )}
                    </Typography.BoldText>
                  ) : (
                    <></>
                  )}
                  <Row>
                    <Typography.BoldText
                      fontSize={11}
                      color="rgba(255, 255, 255, 0.5)"
                      textDecorationLine={
                        firstTariff.promo_price ? 'line-through' : 'none'
                      }>
                      {printPrice(firstTariff.price)}
                    </Typography.BoldText>
                    <Typography.BoldText> </Typography.BoldText>
                    <Typography.BoldText
                      fontSize={11}
                      color="rgba(255, 255, 255, 0.5)">
                      {translate('perDay')}
                    </Typography.BoldText>
                  </Row>
                </View>
              )}
            </>
          )}
        </View>
      </View>
    </TouchableFeedback>
  );
};
