import { useCallback, useEffect, useState } from 'react';
import { getPushList } from '../network/getPushList';
import { TPush } from '../types';

export const usePushList = () => {
  const [pushList, setPushList] = useState<TPush[]>([]);
  const [pushListLoading, setPushListLoading] = useState<boolean>(false);

  const getPushListReq = useCallback(async () => {
    setPushListLoading(true);
    const res = await getPushList();
    setPushListLoading(false);
    setPushList(res?.reverse());
  }, []);

  useEffect(() => {
    getPushListReq();
  }, [getPushListReq]);

  return { pushList, pushListLoading, getPushListReq };
};
