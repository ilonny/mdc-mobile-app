import React from 'react';
import { reset } from '../../../navigation';
import { colors } from '../../../theme';
import { Storage } from '../../asyncStorage';
import { Button, ScreenContainer, Typography } from '../../ui';

export const ProfileMainScreen = () => {
  return (
    <ScreenContainer
      footer={
        <Button
          isWhite
          onPress={async () => {
            await Storage.clear();
            reset('InitialScreen');
          }}>
          <Typography.ButtonText color={colors.totalBlack}>
            Logout
          </Typography.ButtonText>
        </Button>
      }>
      <Typography.ScreenTitle>ProfileMainScreen</Typography.ScreenTitle>
    </ScreenContainer>
  );
};
