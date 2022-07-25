import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { FilterProvider } from './modules/filter/context';
import { OnboardingProvider } from './modules/onboarding/context';
import { notificationHandler } from './modules/push/helpers';
import { Navigation } from './navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    notificationHandler();
    // Storage.clear();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('remoteMessage', remoteMessage);
      Alert.alert(
        remoteMessage?.notification?.title || 'New notification:',
        remoteMessage?.notification?.body || '',
      );
    });

    return unsubscribe;
  }, []);
  return (
    <>
      <StatusBar translucent barStyle="light-content" />
      <OnboardingProvider>
        <FilterProvider>
          <Navigation />
        </FilterProvider>
      </OnboardingProvider>
    </>
  );
};

export default App;
