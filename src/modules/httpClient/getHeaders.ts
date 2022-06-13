import { TRequestType } from './types';
import { getToken } from './getToken';

export const getHeaders = async (type: TRequestType): Promise<Headers> => {
  let headers = new Headers();
  const token = await getToken();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  if (type !== null) {
    switch (type) {
      case 'json':
        headers.set('Content-Type', 'application/json');
        break;
      case 'multipart':
        headers.set('Content-Type', 'multipart/form-data');
        break;
      default:
        break;
    }
  }
  return headers;
};
