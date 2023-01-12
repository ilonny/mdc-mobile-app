import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { reset } from '../../../navigation';
import { Storage } from '../../asyncStorage';
import { request } from '../../httpClient';
import { translate } from '../../translation';
import { authWithCode } from '../network';
export const useAuthWithCode = () => {
  const [authResult, setAuthResult] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);

  const authWithCodeReq = useCallback(async (phone: string, code: string) => {
    setAuthLoading(true);
    if (phone === '711111') {
      phone = '11111';
    } else if (phone[0] !== '+') {
      phone = '+' + phone;
    }
    const res = await authWithCode(phone, code);
    setAuthResult(res?.data);
    setAuthLoading(false);
  }, []);

  useEffect(() => {
    const checkResult = async () => {
      if (authResult) {
        //@ts-ignore
        if (!authResult?.success) {
          Alert.alert(translate('incorrectCode'));
        } else {
          await Storage.setItem('user_id', authResult?.user_id || '');
          await Storage.setItem('token', authResult?.access_token || '');
          reset('InitialScreen');
        }
      }
    };
    checkResult();
  }, [authResult]);

  return { authResult, authLoading, authWithCodeReq };
};
