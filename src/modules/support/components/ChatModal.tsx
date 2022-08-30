import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import WebView from 'react-native-webview';
import { Indent, Row, TouchableFeedback, Typography } from '../../ui';
import { SupportContext } from '../context';
import { styles } from './styles';
const chatPage = require('./chatpage.html');

export const ChatModal = () => {
  const { chatModalVisible, setChatModalVisible } = useContext(SupportContext);
  return (
    <Modal style={styles.wrapper} isVisible={chatModalVisible}>
      <SafeAreaView>
        <Row justifyContent="flex-end">
          <TouchableFeedback onPress={() => setChatModalVisible(false)}>
            <Typography.MainText>Close</Typography.MainText>
          </TouchableFeedback>
        </Row>
      </SafeAreaView>
      <Indent height={20} />
      <WebView
        originWhitelist={['*']}
        automaticallyAdjustContentInsets={false}
        style={{
          width: '100%',
          flex: 1,
        }}
        source={{ uri: 'https://dubaidreamcars.ae/jivoapp' }}
      />
      <SafeAreaView />
    </Modal>
  );
};
