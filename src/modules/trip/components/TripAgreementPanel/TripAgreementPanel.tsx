import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import {
  ImageSource,
  ImageView,
  Indent,
  SecondaryButton,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { Panel } from '../../../ui/Panel';
import { Row } from '../../../ui/Row';
import { styles } from './styles';
import { API_URL } from '../../../httpClient/constants';

type TProps = {
  link: string;
};

export const TripAgreementPanel = (props: TProps) => {
  const { link } = props;
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
    <>
      <TouchableFeedback onPress={() => setModalIsVisible(true)}>
        <Panel fullWidth>
          <Row justifyContent="space-between">
            <View>
              <Typography.BoldText fontSize={16}>
                {translate('agreement')}
              </Typography.BoldText>
              <Indent height={10} />
              <Typography.BoldText fontSize={14} color={colors.secondaryText}>
                {translate('open')}
              </Typography.BoldText>
            </View>
            <ImageView size={30} source={ImageSource.filepdf} />
          </Row>
        </Panel>
      </TouchableFeedback>
      <Modal
        isVisible={modalIsVisible}
        onBackdropPress={() => setModalIsVisible(false)}
        style={[styles.modal]}
        backdropOpacity={0.6}>
        <View style={[styles.modalBottomContent]}>
          <View style={[styles.calendarWrapper]}>
            <View style={styles.calendarHeaderRow}>
              <View />
              <SecondaryButton isWhite onPress={() => setModalIsVisible(false)}>
                {translate('closeModal')}
              </SecondaryButton>
            </View>
          </View>
        </View>
        <WebView source={{ uri: `${API_URL}/${link}` }} />
      </Modal>
    </>
  );
};
