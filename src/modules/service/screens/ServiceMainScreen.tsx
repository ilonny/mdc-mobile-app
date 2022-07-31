import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { ArticleList } from '../../article/components';
import { useArticleList } from '../../article/hooks';
import { translate } from '../../translation';
import { Button, Indent, ScreenContainer, Typography } from '../../ui';

export const ServiceMainScreen = () => {
  const { articleList, articleListLoading } = useArticleList();
  const navigation = useNavigation<NavigationProps>();

  const onPressAllArticles = useCallback(() => {
    navigation.navigate('ArticleListScreen');
  }, [navigation]);

  const firstArticles = useMemo(() => {
    if (articleList?.length) {
      const copy = [...articleList];
      return copy.slice(0, 3);
    }
    return [];
  }, [articleList]);

  return (
    <ScreenContainer fullscreen isLoading={articleListLoading}>
      <Indent height={40} />
      <Typography.ScreenTitle>{translate('Services')}</Typography.ScreenTitle>
      <Indent height={20} />
      {articleList?.length ? (
        <>
          <Typography.ScreenTitle small>
            {translate('Articles')}
          </Typography.ScreenTitle>
          <Indent height={20} />
          <ArticleList items={firstArticles} />
          {articleList?.length > 3 ? (
            <>
              <Indent height={20} />
              <Button isWhite onPress={onPressAllArticles}>
                <Typography.ButtonText color={colors.totalBlack}>
                  {translate('articlesViewAllBtn')}
                </Typography.ButtonText>
              </Button>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      <Indent height={50} />
    </ScreenContainer>
  );
};
