import React, { useCallback, useState } from 'react';
import Modal from 'react-native-modal';
import { Field } from 'react-final-form';
import { Image, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  Typography,
  ImageView,
  ImageSource,
  TouchableFeedback,
  Row,
} from '../../ui';
import { Indent, TextInput, SecondaryButton } from '../../ui';
import { styles } from './styles';
import { translate } from '../../translation';

type TProps = {
  name: string;
  validate?: (arg: string | undefined) => undefined | string;
  placeholder?: string;
  selfie?: boolean;
};

export const FilePicker = (props: TProps) => {
  const { name, validate, placeholder, selfie } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const openModalCb = useCallback(() => setModalVisible(true), []);
  const closeModalCb = useCallback(() => {
    setModalVisible(false);
  }, []);
  return (
    <View>
      <Field name={name} validate={validate}>
        {({ input, meta }) => {
          const error = meta.touched && meta.error;
          return (
            <View>
              <View style={styles.hiddenInputView}>
                <TextInput
                  onChangeText={input.onChange}
                  value={input.value}
                  error={error}
                  onBlur={input.onBlur}
                  onFocus={input.onFocus}
                />
              </View>
              <TouchableFeedback
                onPress={() => {
                  if (selfie) {
                    launchCamera({
                      mediaType: 'photo',
                      cameraType: 'front',
                    }).then(photo => {
                      if (photo?.assets && photo.assets[0]) {
                        input.onChange(photo.assets[0].uri);
                      }
                    });
                  } else {
                    openModalCb();
                  }
                }}>
                <View style={[styles.wrapper, error && styles.wrapperError]}>
                  {input.value ? (
                    <>
                      <ImageView
                        source={input.value}
                        href
                        style={styles.pickedImage}
                      />
                      <ImageView
                        source={ImageSource.retake}
                        style={styles.retakeIcon}
                      />
                    </>
                  ) : (
                    <ImageView
                      size={42}
                      source={
                        error
                          ? ImageSource.x_red
                          : selfie
                          ? ImageSource.camera
                          : ImageSource.upload
                      }
                    />
                  )}
                </View>
              </TouchableFeedback>
              <Indent height={10} />
              <Typography.BoldText>{placeholder || ''}</Typography.BoldText>
              <Modal
                swipeDirection={['down', 'up']}
                isVisible={isModalVisible}
                onBackdropPress={closeModalCb}
                style={styles.modal}
                backdropOpacity={0.6}>
                <View style={styles.modalBottomContent}>
                  <View style={styles.calendarWrapper}>
                    <View style={styles.calendarHeaderRow}>
                      <View />
                      <SecondaryButton isWhite onPress={closeModalCb}>
                        Cancel
                      </SecondaryButton>
                    </View>
                    <Indent height={28} />
                    <TouchableFeedback
                      onPress={() => {
                        launchCamera({
                          mediaType: 'photo',
                          cameraType: 'back',
                        }).then(photo => {
                          if (photo?.assets && photo.assets[0]) {
                            input.onChange(photo.assets[0].uri);
                            closeModalCb();
                          }
                        });
                      }}>
                      <Row>
                        <ImageView source={ImageSource.camera} size={40} />
                        <Indent width={20} />
                        <Typography.BoldText fontSize={17}>
                          {translate('takePhoto')}
                        </Typography.BoldText>
                      </Row>
                    </TouchableFeedback>
                    <Indent height={20} />
                    <TouchableFeedback
                      onPress={() => {
                        launchImageLibrary({
                          mediaType: 'photo',
                          selectionLimit: 1,
                        }).then(photo => {
                          if (photo?.assets && photo.assets[0]) {
                            input.onChange(photo.assets[0].uri);
                            closeModalCb();
                          }
                        });
                      }}>
                      <Row>
                        <ImageView
                          source={ImageSource.gallery}
                          size={40}
                          tintColorProp="#fff"
                        />
                        <Indent width={20} />
                        <Typography.BoldText fontSize={17}>
                          {translate('fromGallery')}
                        </Typography.BoldText>
                      </Row>
                    </TouchableFeedback>
                    <Indent height={40} />
                  </View>
                </View>
              </Modal>
            </View>
          );
        }}
      </Field>
    </View>
  );
};
