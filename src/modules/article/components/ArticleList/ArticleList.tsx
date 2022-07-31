import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Indent, Row, Typography } from '../../../ui';
import { TArticle } from '../../types';
import { ArticleCard } from '../ArticleCard';
import { styles } from './styles';

type TProps = {
  items: TArticle[];
};

export const ArticleList = (props: TProps) => {
  const { items = [] } = props;
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

  return (
    <View style={styles.wrapper}>
      {!!firstCard && <ArticleCard data={firstCard} isBig />}
      {!!otherCards && (
        <>
          <Indent height={20} />
          <Row flexWrap="wrap" marginHorizontal={-2.5}>
            {otherCards?.map(car => {
              return <ArticleCard key={car.id} data={car} />;
            })}
          </Row>
        </>
      )}
    </View>
  );
};
