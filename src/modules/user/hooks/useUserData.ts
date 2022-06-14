import { useCallback, useState } from 'react';
import { getUserData } from '../network';

export const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [userDataLoading, setUserDataLoading] = useState(false);

  const getUserDataReq = useCallback(async (user_id: string) => {
    if (!user_id) {
      return null;
    }
    setUserDataLoading(true);
    const res = await getUserData(user_id);
    setUserData(res);
    setUserDataLoading(false);
    return res;
  }, []);

  return { userData, userDataLoading, getUserDataReq };
};
