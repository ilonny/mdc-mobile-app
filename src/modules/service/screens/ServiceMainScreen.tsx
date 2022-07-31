import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { ArticleList } from '../../article/components';
import { useArticleList } from '../../article/hooks';
import { translate } from '../../translation';
import {
  Button,
  ImageSource,
  ImageView,
  Indent,
  Panel,
  Row,
  ScreenContainer,
  Typography,
} from '../../ui';
import { PartnersOptions } from '../components/PartnersOptions';

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
      <Indent height={20} />
      <Panel>
        <Row justifyContent="space-between" alignItems="center">
          <Typography.BoldText fontSize={16}>
            {translate('Tests')}
          </Typography.BoldText>
          <ImageView size={90} source={ImageSource.service_1} />
        </Row>
      </Panel>
      <Indent height={20} />
      <Typography.BoldText fontSize={20}>
        {translate('Partners')}
      </Typography.BoldText>
      <Indent height={20} />
      <Panel isDashed>
        <Typography.BoldText fontSize={16} textAlign="center">
          {translate('servicesPartnersUnderDev')}
        </Typography.BoldText>
      </Panel>
      <Indent height={20} />
      <PartnersOptions />
      <Indent height={50} />
    </ScreenContainer>
  );
};
