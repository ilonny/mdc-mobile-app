import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { colors } from '../../../theme';
import { Stories } from '../../ui';
import {
  StoriesFirst,
  StoriesFourth,
  StoriesSecond,
  StoriesThird,
} from '../components';

export const OnboardingStoriesScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={{ backgroundColor: colors.totalBlack, flex: 1 }}>
      <Stories
        contentComponents={[
          <StoriesFirst />,
          <StoriesSecond />,
          <StoriesThird />,
          <StoriesFourth />,
        ]}
      />
    </View>
  );
};
