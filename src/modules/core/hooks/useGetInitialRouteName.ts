import { useCallback, useContext, useState } from 'react';
import { RootStackParamList } from '../../../navigation/types';
import { OnboardingContext } from '../../onboarding/context';

export const useGetInitialRouteName = () => {
  const { onboardingShowed, setOnboardingShowed } =
    useContext(OnboardingContext);
  // const [routeName, setRouteName] =
  //   useState<keyof RootStackParamList>('TabScreen');

  const getInitialRouteName = useCallback(async (): Promise<
    keyof RootStackParamList
  > => {
    
    return 'TabScreen';
  }, []);
};
