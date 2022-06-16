import { useCallback, useState } from 'react';
import { setUserData } from '../network';

export const useSetUserData = () => {
  const [userData, setUD] = useState(null);
  const [userDataLoading, setUserDataLoading] = useState(false);

  const setUserDataReq = useCallback(async (values: Record<string, any>) => {
    setUserDataLoading(true);
    const res = await setUserData(values);
    setUD(res);
    setUserDataLoading(false);
    return res;
  }, []);

  return { userData, userDataLoading, setUserDataReq };
};
