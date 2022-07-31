import { useCallback, useEffect, useState } from 'react';
import { getArticleData } from '../network';
import { TArticle } from '../types';

export const useArticleData = (id: number) => {
  const [articleData, setArticleData] = useState<TArticle | null>(null);
  const [articleDataLoading, setArticleDataLoading] = useState<boolean>(false);

  const getArticleDataReq = useCallback(async (id: number) => {
    setArticleDataLoading(true);
    const data = await getArticleData(id);
    setArticleData(data);
    setArticleDataLoading(false);
    return data;
  }, []);

  useEffect(() => {
    if (id) {
      getArticleDataReq(id);
    }
  }, [id]);

  return { articleData, articleDataLoading, getArticleDataReq };
};
