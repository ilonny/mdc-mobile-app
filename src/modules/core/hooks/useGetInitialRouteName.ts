import { useCallback, useContext, useState } from 'react';
import { RootStackParamList } from '../../../navigation/types';
import { Storage } from '../../asyncStorage';
import { OnboardingContext } from '../../onboarding/context';
import { useUserData } from '../../user/hooks';

export const useGetInitialRouteName = () => {
  const { getUserDataReq } = useUserData();

  const getInitialRouteName = useCallback(async (): Promise<
    keyof RootStackParamList
  > => {
    const onboardingShowed = await Storage.getItem('onboardingShowed');
    const pushShowed = await Storage.getItem('onboardingPushShowed');
    const token = await Storage.getItem('token');
    const user_id = (await Storage.getItem('user_id')) || '';
    const userData = await getUserDataReq(user_id);

    console.log('userData', userData);

    if (!onboardingShowed) {
      return 'OnboardingMainScreen';
    }
    if (!pushShowed) {
      return 'OnboardingPushScreen';
    }
    if (!token) {
      return 'AuthScreen';
    }
    if (!userData?.passport_first_page) {
      return 'UserFilesScreen';
    }
    return 'TabScreen';
  }, []);

  return { getInitialRouteName };
};
