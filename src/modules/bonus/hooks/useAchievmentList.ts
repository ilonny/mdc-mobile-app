import { useCallback, useEffect, useMemo, useState } from 'react';
import { getAchievmentCollection, getAchievmentList } from '../network';
import { TAchievment, TAchievmentCollection } from '../types';

export const useAchievmentList = (bonus_value: string) => {
  const [achievmentList, setAchievmentList] = useState<TAchievment[]>([]);
  const [achievmentListLoading, setAchievmentListLoading] =
    useState<boolean>(false);
  // const [received, setReceived] = useState<TAchievment[]>([]);
  // const [unreceived, setUnreceived] = useState<TAchievment[]>([]);
  // const [available, setAvailable] = useState<TAchievment[]>([]);

  const getAchievmentListReq = useCallback(async () => {
    setAchievmentListLoading(true);
    const resAvhievment = await getAchievmentList();
    const resCollection = await getAchievmentCollection();
    // setAchievmentList(resAvhievment);

    let resAvhievmentCopy: TAchievment[] = resAvhievment
      ? [...resAvhievment]
      : [];

    resCollection.forEach((collection: TAchievmentCollection) => {
      let currentAchievement: TAchievment | undefined = resAvhievmentCopy.find(
        (achieve: TAchievment) => achieve.id === +collection.achievment_id,
      );
      let currentAchievementIndex = resAvhievmentCopy.findIndex(
        (achieve: TAchievment) => achieve.id === +collection.achievment_id,
      );
      if (currentAchievement) {
        resAvhievmentCopy[currentAchievementIndex].received = true;
      }
    });

    resAvhievmentCopy = resAvhievmentCopy.map(a => {
      return {
        ...a,
        available:
          !a.received && Number(bonus_value || 0) >= Number(a.bonus_cost || -1),
      };
    });

    setAchievmentList(resAvhievmentCopy);
    setAchievmentListLoading(false);
  }, []);

  useEffect(() => {
    getAchievmentListReq();
  }, []);

  const availableCount = useMemo(() => {
    return achievmentList?.filter(a => a.available)?.length || 0;
  }, [achievmentList]);

  return { achievmentList, achievmentListLoading, availableCount };
};
