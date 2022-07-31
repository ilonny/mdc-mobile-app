import { request } from '../../httpClient';

export const getArticleData = async (id: number) => {
  const res = await request({
    path: `article/get-data?article_id=${id}`,
  });
  return res?.data;
};
