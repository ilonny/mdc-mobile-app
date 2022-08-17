import { useRoute } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import { RootRouteProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { CardList } from '../../car/components';
import { useCarList } from '../../car/hooks';
import { deviceHeight } from '../../device';
import { Indent, Row, ScreenContainer, Typography } from '../../ui';
import { useArticleData } from '../hooks';

export const ArticleDetailScreen = () => {
  const route = useRoute<RootRouteProps<'ArticleDetailScreen'>>();
  const { id } = route.params;
  const { articleData, articleDataLoading, getArticleDataReq } =
    useArticleData(id);
  const [webViewHeight, setWebViewHeight] = useState(0);

  const { carList, carListLoading } = useCarList();

  const vehicleIds = useMemo(() => {
    if (articleData?.vehicle_id) {
      return articleData?.vehicle_id?.split(',');
    }
    return [];
  }, [articleData?.vehicle_id]);

  const chosenCars = useMemo(() => {
    if (carList?.length && vehicleIds?.length) {
      return carList?.filter(c => vehicleIds.includes(c.id.toString()));
    }
    return [];
  }, [carList, vehicleIds]);

  // console.log('articleData', articleData, vehicleIds);
  // console.log('chosenCars', chosenCars);
  return (
    <ScreenContainer
      fullscreen
      headerProps={{ backButton: true }}
      isLoading={articleDataLoading || carListLoading || webViewHeight === 0}>
      <Indent height={60} />
      {/* <Typography.ScreenTitle small>
        {articleData?.title || ''}
      </Typography.ScreenTitle>
      <Indent height={20} /> */}
      <Row marginHorizontal={-16}>
        <WebView
          injectedJavaScript={`
        document.getElementById('t-header').remove();
        document.getElementById('t-footer').remove();
          window.ReactNativeWebView.postMessage(document.body.scrollHeight)
        `}
          scrollEnabled={false}
          onMessage={event => {
            setWebViewHeight(Number(event.nativeEvent.data));
          }}
          automaticallyAdjustContentInsets={false}
          style={{
            width: '100%',
            // flex: 1,
            // height: '100%',
            height: webViewHeight,
            // height: deviceHeight - 140,
            backgroundColor: colors.totalBlack,
          }}
          source={{
            uri: articleData?.link || '',
          }}
        />
      </Row>
      {chosenCars?.length ? (
        <>
          <Indent height={20} />
          <CardList items={chosenCars} />
        </>
      ) : (
        <></>
      )}
      <Indent height={50} />
    </ScreenContainer>
  );
};
