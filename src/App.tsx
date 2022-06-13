import React, { useEffect } from 'react';
import { Storage } from './modules/asyncStorage';
import { OnboardingProvider } from './modules/onboarding/context';
import { Navigation } from './navigation';

const App = () => {
  useEffect(() => {
    Storage.clear();
  }, []);
  return (
    <>
      <OnboardingProvider>
        <Navigation />
      </OnboardingProvider>
    </>
  );
};

export default App;
