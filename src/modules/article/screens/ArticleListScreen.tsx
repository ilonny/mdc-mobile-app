import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { ArticleList } from '../../article/components';
import { useArticleList } from '../../article/hooks';
import { translate } from '../../translation';
import { Button, Indent, ScreenContainer, Typography } from '../../ui';

export const ArticleListScreen = () => {
  const { articleList, articleListLoading } = useArticleList();
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScreenContainer fullscreen isLoading={articleListLoading} headerProps={{ backButton: true }}>
      <Indent height={60} />
      <Typography.ScreenTitle>{translate('Articles')}</Typography.ScreenTitle>
      <Indent height={20} />
      {articleList?.length ? (
        <>
          <ArticleList items={articleList} allSmall />
        </>
      ) : (
        <></>
      )}
      <Indent height={50} />
    </ScreenContainer>
  );
};
