import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import {
  Button,
  ImageSource,
  ImageView,
  Indent,
  Row,
  Typography,
} from '../../ui';
import { styles } from './styles';

export const PollBlockMainScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const onPressTakeTest = useCallback(() => {
    navigation.navigate('PollMainScreen');
  }, [navigation]);

  return (
    <View style={styles.pollWrapper}>
      <Row justifyContent="center">
        <ImageView
          style={styles.pollImage}
          source={ImageSource.poll_block_pic}
        />
      </Row>
      <Indent height={20} />
      <Typography.ScreenTitle textAlign="center">
        Don't know what{'\n'}to choose?
      </Typography.ScreenTitle>
      <Indent height={20} />
      <Row justifyContent="center">
        <View style={styles.descriptionWrapper}>
          <Typography.BoldText
            textAlign="center"
            color={colors.secondaryText}
            fontSize={16}>
            We have an interactive test that will help you to make a choice!
          </Typography.BoldText>
        </View>
      </Row>
      <Indent height={60} />
      <Button isWhite onPress={onPressTakeTest}>
        <Typography.BoldText color={colors.totalBlack}>
          Take the test
        </Typography.BoldText>
      </Button>
      <Indent height={20} />
      <Typography.MainText fontSize={14} textAlign="center">
        It takes 30 seconds
      </Typography.MainText>
    </View>
  );
};
