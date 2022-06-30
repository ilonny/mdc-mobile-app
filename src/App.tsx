import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Storage } from './modules/asyncStorage';
import { FilterProvider } from './modules/filter/context';
import { OnboardingProvider } from './modules/onboarding/context';
import { Navigation } from './navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    // Storage.clear();
  }, []);
  return (
    <>
      <OnboardingProvider>
        <FilterProvider>
          <Navigation />
        </FilterProvider>
      </OnboardingProvider>
    </>
  );
};

export default App;
