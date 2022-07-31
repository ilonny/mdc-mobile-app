import { request } from '../../httpClient';

export const getArticleList = async () => {
  const res = await request({
    path: 'article/list',
  });
  return res?.data;
};
