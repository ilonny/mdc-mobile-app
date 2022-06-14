import React from 'react';
import { translate } from '../../translation';
import {
  ScreenContainer,
  ImageView,
  Row,
  Indent,
  Typography,
  ImageSource,
} from '../../ui';
import { UserFilesForm } from '../components';
import { styles } from './styles';

export const UserFilesScreen = () => {
  return (
    <ScreenContainer fullscreen>
      <Row column alignItems="center" flex={1}>
        <Indent height={30} />
        <ImageView source={ImageSource.logo} style={styles.logo} />
        <Indent height={50} />
        <Typography.BoldText textAlign="center" fontSize={32}>
          {translate('userFilesTitle')}
        </Typography.BoldText>
        <Indent height={15} />
        <Typography.BoldText
          textAlign="center"
          fontSize={16}
          color={'rgba(255,255,255, 0.4)'}>
          {translate('userFilesDescription')}
        </Typography.BoldText>
        <Indent height={30} />
      </Row>
      <UserFilesForm />
      <Indent height={50} />
    </ScreenContainer>
  );
};
