import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { colors } from '../../../theme';
import { Stories } from '../../ui';

export const OnboardingStoriesScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={{ backgroundColor: colors.totalBlack, flex: 1 }}>
      <Stories
        contentComponents={[
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff' }}>First component</Text>
          </View>,
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff' }}>Second component</Text>
          </View>,
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff' }}>Third component</Text>
          </View>,
        ]}
      />
    </View>
  );
};
