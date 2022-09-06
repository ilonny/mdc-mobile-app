import React, { useMemo } from 'react';
import { View } from 'react-native';
import { translate } from '../../../translation';
import { Indent, Row, Typography } from '../../../ui';
import { TCar } from '../../types';
import { CarCard } from '../CarCard';
import { styles } from './styles';

type TProps = {
  items: Array<TCar>;
  allSmall?: boolean;
  allBig?: boolean;
};

export const CardList = (props: TProps) => {
  const { items, allSmall, allBig } = props;

  const firstCard = useMemo(() => {
    if (items.length) {
      return items[0];
    }
    return null;
  }, [items]);

  const otherCards = useMemo(() => {
    if (items.length) {
      const itemsCopy = [...items];
      itemsCopy.shift();
      return itemsCopy;
    } else {
      return [];
    }
  }, [items]);

  if (!items || items?.length === 0) {
    return (
      <View
        style={{
          width: '100%',
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography.BoldText textAlign="center">
          {translate('noCarsFound')}
        </Typography.BoldText>
      </View>
    );
  }

  if (allSmall) {
    return (
      <View style={styles.wrapper}>
        <Row
          flexWrap="wrap"
          marginHorizontal={-2.5}
          alignItems="stretch"
          flex={1}>
          {[firstCard].concat(otherCards)?.map(car => {
            return <CarCard key={car.id} data={car} />;
          })}
        </Row>
      </View>
    );
  }

  if (allBig) {
    <View style={styles.wrapper}>
      {[firstCard].concat(otherCards)?.map(car => {
        return <CarCard key={car.id} data={car} isBig />;
      })}
    </View>;
  }

  return (
    <View style={styles.wrapper}>
      {!!firstCard && <CarCard data={firstCard} isBig />}
      {!!otherCards && (
        <>
          <Indent height={20} />
          <Row
            flexWrap="wrap"
            marginHorizontal={-2.5}
            alignItems="stretch"
            flex={1}>
            {otherCards?.map(car => {
              return <CarCard key={car.id} data={car} />;
            })}
          </Row>
        </>
      )}
    </View>
  );
};
