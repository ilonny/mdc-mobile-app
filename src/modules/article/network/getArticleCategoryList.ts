import { request } from '../../httpClient';

export const getArticleCategoryList = async () => {
  const res = await request({
    path: `article-category/list`,
  });
  return res?.data;
};
