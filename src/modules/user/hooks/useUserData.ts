import { useCallback, useState, useEffect } from 'react';
import { Storage } from '../../asyncStorage';
import { getUserData } from '../network';
import { TUserData } from '../types';

export const useUserData = (force?: boolean) => {
  const [userData, setUserData] = useState<null | TUserData>(null);
  const [userDataLoading, setUserDataLoading] = useState(false);

  const getUserDataReq = useCallback(async (user_id?: string | null) => {
    if (!user_id) {
      user_id = await Storage.getItem('user_id');
    }
    if (!user_id) {
      return false;
    }
    setUserDataLoading(true);
    const res = await getUserData(user_id);
    setUserData(res);
    setUserDataLoading(false);
    return res;
  }, []);

  useEffect(() => {
    if (force) {
      const getUserId = async () => {
        const user_id = await Storage.getItem('user_id');
        if (user_id) {
          getUserDataReq(user_id);
        }
      };
      getUserId();
    }
  }, [force, getUserDataReq]);

  return { userData, userDataLoading, getUserDataReq };
};
