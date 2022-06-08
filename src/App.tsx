import React from 'react';
import { OnboardingProvider } from './modules/onboarding/context';
import { Navigation } from './navigation';

const App = () => {
  return (
    <>
      <OnboardingProvider>
        <Navigation />
      </OnboardingProvider>
    </>
  );
};

export default App;
