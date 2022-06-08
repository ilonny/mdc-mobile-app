import React, { useState, useCallback } from 'react';

export type TCtx = {
  onboardingShowed: boolean;
  setOnboardingShowed: (arg: boolean) => void;
  clearOnboardingContext: () => void;
};

const defaultState = {};
//@ts-ignore
export const OnboardingContext = React.createContext<TCtx>(defaultState);

export const OnboardingProvider = ({ children }: any) => {
  const [onboardingShowed, setOnboardingShowed] = useState(false);

  const clearOnboardingContext = useCallback(() => {
    setOnboardingShowed(false);
  }, []);

  return (
    <OnboardingContext.Provider
      value={{
        onboardingShowed,
        setOnboardingShowed,
        clearOnboardingContext,
      }}>
      {children}
    </OnboardingContext.Provider>
  );
};
