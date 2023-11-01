import { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../../httpClient/constants';
import { getArticleCategoryList } from '../network';
import { TArticle } from '../types';

export const useArticleCategoryList = () => {
  const [articleCategoryList, setArticleCategoryList] = useState<TArticle[]>([]);
  const [articleCategoryListLoading, setArticleCategoryListLoading] = useState<boolean>(false);

  const getArticleCategoryListReq = useCallback(async () => {
    setArticleCategoryListLoading(true);
    let res = await getArticleCategoryList();
    res = res?.map(r => {
      return {
        ...r,
        image: `${API_URL}/${r.image}`,
      };
    });
    setArticleCategoryListLoading(false);
    setArticleCategoryList(res?.reverse());
    return res;
  }, []);

  useEffect(() => {
    getArticleCategoryListReq();
  }, [getArticleCategoryListReq]);

  return { articleCategoryList, articleCategoryListLoading, getArticleCategoryListReq };
};
