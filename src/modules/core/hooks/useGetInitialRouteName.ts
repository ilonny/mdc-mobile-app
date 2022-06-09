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
    if (!onboardingShowed) {
      return 'OnboardingMainScreen';
    }
    return 'TabScreen';
  }, []);

  return { getInitialRouteName };
};
