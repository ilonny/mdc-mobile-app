import { reset } from '../../../navigation';
import { Storage } from '../../asyncStorage';

export const completeOnboarding = async () => {
  await Storage.setItem('onboardingShowed', '1');
  reset('InitialScreen');
};

export const completeOnboardingPush = async () => {
  await Storage.setItem('onboardingPushShowed', '1');
  reset('InitialScreen');
};
