import React, { useCallback, useState } from 'react';
import Modal from 'react-native-modal';
import { ActivityIndicator, View } from 'react-native';
import { translate } from '../../../translation';
import { Button, Indent, Typography } from '../../../ui';
import { styles } from './styles';
import { colors } from '../../../../theme';
import { cancelTrip } from '../../network';

type TProps = {
  id: number;
  callback: () => void;
  disabled?: boolean;
};

export const TripCancelButton = (props: TProps) => {
  const { id, callback = () => {}, disabled = false } = props;
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const cancelBooking = useCallback(async () => {
    setLoading(true);
    await cancelTrip(id.toString());
    setLoading(true);
    callback();
    setModalIsVisible(false);
  }, [id]);

  return (
    <View>
      <Button
        border
        onPress={() => setModalIsVisible(true)}
        disabled={disabled}>
        <Typography.BoldText>
          {translate('TripCancelButton')}
        </Typography.BoldText>
      </Button>
      <Modal
        isVisible={modalIsVisible}
        onBackdropPress={() => setModalIsVisible(false)}
        style={[styles.modal]}
        backdropOpacity={0.6}>
        <View style={styles.content}>
          {loading ? (
            <>
              <ActivityIndicator />
            </>
          ) : (
            <>
              <Typography.BoldText
                textAlign="center"
                fontSize={24}
                color={colors.totalBlack}>
                {translate('tripCancelTitle')}
              </Typography.BoldText>
              <Indent height={20} />
              <Typography.BoldText
                textAlign="center"
                fontSize={18}
                color={colors.totalBlack}>
                {translate('tripCancelText')}
              </Typography.BoldText>
              <Indent height={20} />
              <Button isBlack onPress={cancelBooking}>
                <Typography.BoldText>
                  {translate('tripCancelOkBtn')}
                </Typography.BoldText>
              </Button>
              <Button onPress={() => setModalIsVisible(false)}>
                <Typography.BoldText color={colors.totalBlack}>
                  {translate('closeModal')}
                </Typography.BoldText>
              </Button>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
};
