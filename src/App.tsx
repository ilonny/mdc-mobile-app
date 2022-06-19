import React, { useEffect } from 'react';
import { Storage } from './modules/asyncStorage';
import { FilterProvider } from './modules/filter/context';
import { OnboardingProvider } from './modules/onboarding/context';
import { Navigation } from './navigation';

const App = () => {
  // useEffect(() => {
  //   Storage.clear();
  // }, []);
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
