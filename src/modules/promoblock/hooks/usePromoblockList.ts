import { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../../httpClient/constants';
import { getPromoblockList } from '../network';
import { TPromoblock } from '../types';

export const usePromoblockList = () => {
  const [promoblockList, setPromoblockList] = useState<TPromoblock[]>([]);
  const [promoblockListLoading, setPromoblockListLoading] =
    useState<boolean>(false);

  const getPromoblockListReq = useCallback(async () => {
    setPromoblockListLoading(true);
    let res = await getPromoblockList();
    res = res?.map(r => {
      return {
        ...r,
        image: r.image && r.image !== 'null' ? `${API_URL}/${r.image}` : null,
        video: r.video && r.video !== 'null' ? `${API_URL}/${r.video}` : null,
      };
    });
    setPromoblockListLoading(false);
    setPromoblockList(res);
    return res;
  }, []);

  useEffect(() => {
    getPromoblockListReq();
  }, [getPromoblockListReq]);

  return { promoblockList, promoblockListLoading, getPromoblockListReq };
};
