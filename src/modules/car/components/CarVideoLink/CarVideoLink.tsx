import React, { useCallback } from 'react';
import { Alert, Linking, View } from 'react-native';
import { translate } from '../../../translation';
import {
  ImageSource,
  ImageView,
  Indent,
  Row,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { styles } from './styles';

type TProps = {
  videoLink?: string | null;
  isBig?: boolean;
};

export const CarVideoLink = (props: TProps) => {
  const { videoLink, isBig } = props;
  if (!videoLink) {
    return <></>;
  }

  const onPress = useCallback(() => {
    if (videoLink) {
      try {
        Linking.openURL(videoLink);
      } catch (e) {
        Alert.alert('Unable to open URL');
      }
    }
  }, [videoLink]);

  return (
    <TouchableFeedback onPress={onPress}>
      {isBig ? (
        <>
          <View style={styles.imageWrapper}>
            <ImageView style={styles.image} source={ImageSource.video_bg} />
            <ImageView size={70} source={ImageSource.play_circle_big} />
          </View>
          <Indent height={20} />
          <Row paddingHorizontal={16}>
            <Typography.BoldText fontSize={17}>
              {translate('videoReviewFromMdc')}
            </Typography.BoldText>
          </Row>
        </>
      ) : (
        <Row>
          <ImageView source={ImageSource.play_circle} size={27} />
          <Indent width={15} />
          <Typography.BoldText fontSize={17}>
            {translate('videoReviewFromMdc')}
          </Typography.BoldText>
        </Row>
      )}
      <Indent height={30} />
    </TouchableFeedback>
  );
};
