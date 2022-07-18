import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { reset } from '../../../navigation';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { Storage } from '../../asyncStorage';
import { Button, Indent, ScreenContainer, Typography } from '../../ui';
import { useUserData } from '../../user/hooks';
import { UserSecurityStatus } from '../../user/components';

export const ProfileMainScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { userData, userDataLoading, getUserDataReq } = useUserData(true);

  const refreshData = useCallback(async () => {
    getUserDataReq();
  }, [getUserDataReq]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refreshData();
    });
    return unsubscribe;
  }, [refreshData, navigation]);

  console.log('userData', userData);
  return (
    <ScreenContainer
      isLoading={userDataLoading}
      footer={
        <Button
          isWhite
          onPress={async () => {
            await Storage.clear();
            reset('InitialScreen');
          }}>
          <Typography.ButtonText color={colors.totalBlack}>
            Logout
          </Typography.ButtonText>
        </Button>
      }
      fullscreen>
      <Indent height={40} />
      <Typography.ScreenTitle>{userData?.name || ''}</Typography.ScreenTitle>
      <Indent height={20} />
      <UserSecurityStatus status={userData?.security_check || null} />
    </ScreenContainer>
  );
};
