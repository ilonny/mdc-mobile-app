import _ from 'lodash';
import React from 'react';
import { PushList } from '../../push/components';
import { usePushList } from '../../push/hooks';
import { translate } from '../../translation';
import { Indent, ScreenContainer, Typography } from '../../ui';

export const ProfileNotificationsScreen = () => {
  const { pushList, pushListLoading } = usePushList();
  return (
    <ScreenContainer
      fullscreen
      headerProps={{ backButton: true }}
      isLoading={pushListLoading}>
      <Indent height={70} />
      <Typography.ScreenTitle>
        {_.capitalize(translate('notifications'))}
      </Typography.ScreenTitle>
      <Indent height={40} />
      <PushList data={pushList} />
      <Indent height={40} />
    </ScreenContainer>
  );
};
