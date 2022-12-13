import { useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { RootRouteProps } from '../../../navigation/types';
import { CardList } from '../../car/components';
import { useCarList } from '../../car/hooks';
import { Indent, ScreenContainer, Typography } from '../../ui';

export const PollResultScreen = () => {
  const { carList, carListLoading } = useCarList();
  const route = useRoute<RootRouteProps<'PollResultScreen'>>();
  const { answers } = route.params;

  const carListFiltered = useMemo(() => {
    let res = [...carList];
    if (answers[0] === 5) {
      res = res.filter(c => {
        return c.id !== 95 && c.id !== 96;
      });
    }
    if (answers[0] === 8) {
      res = res.filter(c => {
        return c.id === 102;
      });
    }
    if (answers[3] === 1) {
      res = res.filter(c => {
        return c.id !== 91;
      });
    }
    return res;
  }, [carList, answers]);

  return (
    <ScreenContainer
      headerProps={{ backButton: true }}
      isLoading={carListLoading}>
      <Typography.ScreenTitle>Результат</Typography.ScreenTitle>
      <Indent height={20} />
      <Typography.BoldText fontSize={22}>
        Мы думаем, эти варианты вам идеально подойдут:
      </Typography.BoldText>
      <Indent height={20} />
      <CardList items={carListFiltered} />
    </ScreenContainer>
  );
};
