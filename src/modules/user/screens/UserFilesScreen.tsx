import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { reset } from '../../../navigation';
import { NavigationProps } from '../../../navigation/types';
import { translate } from '../../translation';
import {
  ScreenContainer,
  ImageView,
  Row,
  Indent,
  Typography,
  ImageSource,
} from '../../ui';
import { UserFilesForm } from '../components';
import { useSetUserData } from '../hooks';
import { styles } from './styles';

export const UserFilesScreen = () => {
  const { userData, userDataLoading, setUserDataReq } = useSetUserData();
  const navigation = useNavigation<NavigationProps>();
  const onSubmit = useCallback((values: Record<string, any>) => {
    setUserDataReq(values);
  }, []);

  useEffect(() => {
    console.log('userData effect', userData);
    if (userData?.data?.existedUserData?.passport_first_page) {
      reset('TabScreen');
    }
  }, [userData]);

  return (
    <ScreenContainer fullscreen isLoading={userDataLoading}>
      <Row column alignItems="center" flex={1}>
        <Indent height={30} />
        <ImageView source={ImageSource.logo} style={styles.logo} />
        <Indent height={50} />
        <Typography.BoldText textAlign="center" fontSize={32}>
          {translate('userFilesTitle')}
        </Typography.BoldText>
        <Indent height={15} />
        <Typography.BoldText
          textAlign="center"
          fontSize={16}
          color={'rgba(255,255,255, 0.4)'}>
          {translate('userFilesDescription')}
        </Typography.BoldText>
        <Indent height={30} />
      </Row>
      <UserFilesForm onSubmit={onSubmit} />
      <Indent height={50} />
    </ScreenContainer>
  );
};
