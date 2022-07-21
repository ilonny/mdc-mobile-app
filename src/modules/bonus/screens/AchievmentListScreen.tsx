import _ from 'lodash';
import React, { useState } from 'react';
import { View } from 'react-native';
import { colors } from '../../../theme';
import { translate } from '../../translation';
import {
  Divider,
  ImageSource,
  ImageView,
  Indent,
  Row,
  ScreenContainer,
  Tabs,
  TouchableFeedback,
  Typography,
} from '../../ui';
import { AchievmentList } from '../components';
import { useAchievmentList } from '../hooks';

export const AchievmentListScreen = () => {
  const { achievmentListLoading, achievmentList, availableList } =
    useAchievmentList();

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <ScreenContainer
      headerProps={{ backButton: true }}
      fullscreen
      isLoading={achievmentListLoading}>
      <Indent height={70} />
      <Typography.ScreenTitle>
        {_.capitalize(translate('rewards'))}
      </Typography.ScreenTitle>
      <Indent height={20} />
      <Tabs
        activeIndex={activeTabIndex}
        tabs={[
          _.capitalize(translate('all')),
          _.capitalize(translate('available')),
        ]}
        onChange={setActiveTabIndex}
      />
      <Indent height={20} />
      <AchievmentList
        achievmentList={activeTabIndex === 0 ? achievmentList : availableList}
      />
    </ScreenContainer>
  );
};
