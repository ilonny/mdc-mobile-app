import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { reset } from '../../../navigation';
import { Storage } from '../../asyncStorage';
import { request } from '../../httpClient';
import { translate } from '../../translation';
import { AUTH_WITCH_CODE_PATH, CHECK_STATUS, GET_CODE_NUMBER } from '../constants';
import { authWithCode } from '../network';

export const useAuthWithCall = () => {
  const [number, setNumber] = useState('');
  const [request_id, setRequestId] = useState('');
  
  const getNumber = useCallback(async (phone: string) => {
    const res = await request({
      path: GET_CODE_NUMBER,
      method: 'POST',
      body: JSON.stringify({ phone }),
    });
    setNumber(res?.data?.number);
    setRequestId(res?.data?.request_id);
  }, []);

  const checkStatus = useCallback(async (phone: string, request_id) => {

    const res = await request({
      path: CHECK_STATUS,
      method: 'POST',
      body: JSON.stringify({ phone, request_id }),
    });
    const authResult = res?.data;

    if (!authResult?.success) {
      Alert.alert('Произошла ошибка, попробуйте позже');
    } else {
      await Storage.setItem('user_id', authResult?.user_id || '');
      await Storage.setItem('token', authResult?.access_token || '');
      reset('InitialScreen');
    }
  }, []);

  return { number, request_id, getNumber, checkStatus };
};
