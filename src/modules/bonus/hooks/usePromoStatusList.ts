import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { Storage } from '../../asyncStorage';
import { API_URL } from '../../httpClient/constants';
import { getPromoStatusList } from '../network';
import { TBonusStatus } from '../types';

export const usePromoStatusList = (
  user_id: string,
  bonus_value: string | number,
) => {
  if (!bonus_value || bonus_value === 'null') {
    bonus_value = 0;
  }

  const [promoStatusList, setPromoStatusList] = useState<TBonusStatus[]>([]);
  const [promoStatusListLoading, setPromoStatusListLoading] = useState(false);
  const [userPromoStatus, setUserPromoStatus] = useState<TBonusStatus | null>(
    null,
  );
  const [nextStatus, setNextStatus] = useState<TBonusStatus | null>(null);

  const getPromoStatusListReq = useCallback(async () => {
    setPromoStatusListLoading(true);
    const res = await getPromoStatusList();
    setPromoStatusList(
      res?.map((el: TBonusStatus) => {
        return {
          ...el,
          image: `${API_URL}/${el.image}`,
        };
      }),
    );
    setPromoStatusListLoading(false);
    return res;
  }, []);

  useEffect(() => {
    getPromoStatusListReq();
  }, [getPromoStatusListReq]);

  useEffect(() => {
    const firstEl = [...promoStatusList][0];
    const promoStatusListSortered = _.sortBy(
      promoStatusList,
      o => Number(o.bonus_cost),
      'asc',
    ).reverse();
    const chosenStatusIndex =
      promoStatusListSortered.findIndex(
        s => Number(bonus_value) >= Number(s.bonus_cost),
      ) || 0;
    if (chosenStatusIndex !== -1) {
      setUserPromoStatus(promoStatusListSortered[chosenStatusIndex]);
      try {
        const next = promoStatusListSortered[chosenStatusIndex - 1];
        setNextStatus(next);
      } catch (err) {}
    } else {
      setUserPromoStatus(firstEl);
    }
  }, [promoStatusList]);

  return {
    promoStatusList,
    promoStatusListLoading,
    getPromoStatusListReq,
    userPromoStatus,
    nextStatus,
  };
};
