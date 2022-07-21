import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import {
  Button,
  Divider,
  ImageSource,
  ImageView,
  Indent,
  Row,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { TAchievment } from '../../types';
import { styles } from './styles';

type TProps = {
  achievmentList: TAchievment[];
};

export const AchievmentList = (props: TProps) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const { achievmentList } = props;

  const getColorTop = useCallback((a: TAchievment) => {
    if (a.available) {
      return colors.lightGreen;
    }
    return colors.secondaryGray;
  }, []);

  const onPressAchievment = useCallback((a: TAchievment) => {
    if (a.available) {
      setModalIsVisible(true);
    }
  }, []);

  return (
    <>
      {achievmentList?.map(a => {
        return (
          <TouchableFeedback
            key={a.id}
            style={styles.rowWrapper}
            onPress={() => onPressAchievment(a)}>
            <Indent height={10} />
            <Row fullWidth justifyContent="space-between">
              <View>
                <Typography.BoldText
                  color={getColorTop(a)}
                  textDecorationLine={a.received ? 'line-through' : 'none'}>
                  {a.bonus_cost || ''} {translate('points')}
                </Typography.BoldText>
                <Indent height={10} />
                <Typography.BoldText fontSize={16}>
                  {a.title || ''}
                </Typography.BoldText>
              </View>
              <View>
                {a.received ? (
                  <ImageView source={ImageSource.reward_recieved} size={38} />
                ) : (
                  <></>
                )}
                {a.available ? (
                  <ImageView source={ImageSource.gift} size={38} />
                ) : (
                  <></>
                )}
              </View>
            </Row>
            <Indent height={10} />
            <Divider margin={10} />
          </TouchableFeedback>
        );
      })}
      <Modal
        isVisible={modalIsVisible}
        onBackdropPress={() => setModalIsVisible(false)}
        style={[styles.modal]}
        backdropOpacity={0.6}>
        <View style={styles.content}>
          <>
            <Typography.BoldText
              textAlign="center"
              fontSize={24}
              color={colors.totalBlack}>
              {translate('getRewardsTitle')}
            </Typography.BoldText>
            <Indent height={20} />
            <Typography.BoldText
              textAlign="center"
              fontSize={18}
              color={colors.totalBlack}>
              {translate('getRewardsText')}
            </Typography.BoldText>
            <Indent height={20} />
            <Button isBlack>
              <Typography.BoldText>
                {translate('writeInChat')}
              </Typography.BoldText>
            </Button>
            <Button onPress={() => setModalIsVisible(false)}>
              <Typography.BoldText color={colors.totalBlack}>
                {translate('closeModal')}
              </Typography.BoldText>
            </Button>
          </>
        </View>
      </Modal>
    </>
  );
};
