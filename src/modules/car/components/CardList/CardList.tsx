import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Indent, Row, Typography } from '../../../ui';
import { TCar } from '../../types';
import { CarCard } from '../CarCard';

type TProps = {
  items: Array<TCar>;
};

export const CardList = (props: TProps) => {
  const { items } = props;

  const firstCard = useMemo(() => {
    if (items.length) {
      return items[0];
    }
    return null;
  }, []);

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
    return <></>;
  }

  return (
    <View>
      {!!firstCard && (
        <CarCard
          data={firstCard}
          isBig
          onPress={() => console.log('card press')}
        />
      )}
      {!!otherCards && (
        <>
          <Indent height={20} />
          <Row flexWrap="wrap" marginHorizontal={-2.5}>
            {otherCards?.map(car => {
              return (
                <CarCard
                  key={car.id}
                  data={car}
                  onPress={() => console.log('card press')}
                />
              );
            })}
          </Row>
        </>
      )}
    </View>
  );
};
