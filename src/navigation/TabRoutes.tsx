import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  CarStackParamList,
  ProfileStackParamList,
  ServiceStackParamList,
  TripStackParamList,
} from './types';
import { colors } from '../theme';
import {
  CarListScreen,
  CarMainScreen,
  CarDetailScreen,
} from '../modules/car/screens';
import { translate } from '../modules/translation';
import { ImageSource, ImageView } from '../modules/ui';
import { ProfileMainScreen } from '../modules/profile/screens';
import { TripMainScreen } from '../modules/trip/screens';
import { ServiceMainScreen } from '../modules/service/screens';

const Tab = createBottomTabNavigator();

const CarStack = createNativeStackNavigator<CarStackParamList>();
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
const TripStack = createNativeStackNavigator<TripStackParamList>();
const ServiceStack = createNativeStackNavigator<ServiceStackParamList>();

const modalScreenOptions: { presentation: 'modal' } = {
  presentation: 'modal',
};

const CarStackComponent = () => {
  return (
    <CarStack.Navigator screenOptions={{ headerShown: false }}>
      <CarStack.Screen name="CarMainScreen" component={CarMainScreen} />
      <CarStack.Screen name="CarListScreen" component={CarListScreen} />
      <CarStack.Screen name="CarDetailScreen" component={CarDetailScreen} />
    </CarStack.Navigator>
  );
};

const ProfileStackComponent = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen
        name="ProfileMainScreen"
        component={ProfileMainScreen}
      />
    </ProfileStack.Navigator>
  );
};

const TripStackComponent = () => {
  return (
    <TripStack.Navigator screenOptions={{ headerShown: false }}>
      <TripStack.Screen name="TripMainScreen" component={TripMainScreen} />
    </TripStack.Navigator>
  );
};

const ServiceStackComponent = () => {
  return (
    <ServiceStack.Navigator screenOptions={{ headerShown: false }}>
      <ServiceStack.Screen
        name="ServiceMainScreen"
        component={ServiceMainScreen}
      />
    </ServiceStack.Navigator>
  );
};

export const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.mainGray,
          borderTopColor: 'rgba(18, 20, 26, 0.5)',
          minHeight: 90,
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof ImageSource = 'tab_icon_car';
          let iconColor = focused ? '#fff' : colors.secondaryGray;

          if (route.name === translate('Profile')) {
            iconName = 'tab_icon_profile';
          }
          if (route.name === translate('MyTrips')) {
            iconName = 'tab_icon_trips';
          }
          if (route.name === translate('Services')) {
            iconName = 'tab_icon_service';
          }

          return (
            <ImageView
              source={ImageSource[iconName]}
              size={50}
              tintColorProp={iconColor}
            />
          );
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: colors.secondaryGray,
        tabBarLabelStyle: {
          fontFamily: 'Inter-Bold',
          fontWeight: '600',
          fontSize: 11,
          textAlign: 'center',
        },
      })}>
      <Tab.Screen name={translate('autoPark')} component={CarStackComponent} />
      <Tab.Screen name={translate('MyTrips')} component={TripStackComponent} />
      <Tab.Screen
        name={translate('Profile')}
        component={ProfileStackComponent}
      />
      <Tab.Screen
        name={translate('Services')}
        component={ServiceStackComponent}
      />
    </Tab.Navigator>
  );
};
