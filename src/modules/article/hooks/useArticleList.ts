import { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../../httpClient/constants';
import { getArticleList } from '../network';
import { TArticle } from '../types';

export const useArticleList = () => {
  const [articleList, setArticleList] = useState<TArticle[]>([]);
  const [articleListLoading, setArticleListLoading] = useState<boolean>([]);

  const getArticleListReq = useCallback(async () => {
    setArticleListLoading(true);
    let res = await getArticleList();
    res = res?.map(r => {
      return {
        ...r,
        image: `${API_URL}/${r.image}`,
      };
    });
    setArticleListLoading(false);
    setArticleList(res);
    return res;
  }, []);

  useEffect(() => {
    getArticleListReq();
  }, [getArticleListReq]);

  return { articleList, articleListLoading, getArticleListReq };
};
