import { useCallback, useContext, useState } from 'react';
import { RootStackParamList } from '../../../navigation/types';
import { Storage } from '../../asyncStorage';
import { OnboardingContext } from '../../onboarding/context';

export const useGetInitialRouteName = () => {
  // const { onboardingShowed, setOnboardingShowed } =
  //   useContext(OnboardingContext);
  // const [routeName, setRouteName] =
  //   useState<keyof RootStackParamList>('TabScreen');

  const getInitialRouteName = useCallback(async (): Promise<
    keyof RootStackParamList
  > => {
    const onboardingShowed = await Storage.getItem('onboardingShowed');
    const pushShowed = await Storage.getItem('onboardingPushShowed');
    if (!onboardingShowed) {
      return 'OnboardingMainScreen';
    }
    if (!pushShowed) {
      return 'OnboardingPushScreen';
    }
    return 'TabScreen';
  }, []);

  return { getInitialRouteName };
};
