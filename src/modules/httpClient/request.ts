import { ErrorHandlerInstance } from './../core/errorHandler/index';
import { Alert } from 'react-native';
import { getHeaders } from './getHeaders';
import { API_URL } from './constants';
import { TRequestOptions } from './types';
import { reset } from '../../navigation';
import { Storage } from '../asyncStorage';

type TResult = {
  response: any;
  ok: boolean;
  status: number;
  data: any;
  parsedError?: any;
};

export const request = async (options: TRequestOptions) => {
  let {
    path,
    body = null,
    method = 'GET',
    headers,
    requestType = 'json',
    responseType = 'json',
    callback,
  } = options;

  let commonHeaders = await getHeaders(requestType);

  if (headers) {
    commonHeaders = {
      ...commonHeaders,
      ...headers,
    };
  }
  const requestConfig = {
    method,
    body,
    headers: commonHeaders,
  };
  let response: any;
  try {
    response = await fetch(`${API_URL}/${path}`, requestConfig);
    // console.log('response', response);
  } catch (e) {
    if (typeof callback === 'function') {
      callback();
    } else {
      Alert.alert('error with fetch data');
      console.log(e, path);
    }
  }
  let result: TResult | 'unauthorized' = {
    response,
    ok: !!response?.ok,
    status: response?.status,
    data: null,
    parsedError: null,
  };
  if (response?.status === 401) {
    Alert.alert('Authorize error, please login again');
    await Storage.removeItem('user_id');
    await Storage.removeItem('token');
    reset('InitialScreen');
    return false;
  }
  if (response?.ok) {
    try {
      if (responseType === 'json') {
        result.data = await response.json();
      }
      if (responseType === 'text') {
        result.data = await response.text();
      }
      if (responseType === 'blob') {
        result.data = await response.blob();
      }
    } catch (e) {}
  } else {
    let errorBody = null;
    try {
      errorBody = await response.json();
    } catch (e) {
      try {
        errorBody = await response.text();
      } catch (e) {
        errorBody = `Internal server error, code: ${response?.status}`;
      }
    }
    if (errorBody?.message?.includes('Unauthenticated')) {
      result = 'unauthorized';
    }

    ErrorHandlerInstance.handleRequestError(errorBody);

    if (typeof result === 'object') {
      result.data = errorBody;
    }
  }
  return result;
};
