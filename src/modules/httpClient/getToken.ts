import { Storage } from '../asyncStorage';

export const getToken = async () => {
  const token = await Storage.getItem('token');
  return token;
};
