import React, { useCallback } from 'react';
import { Field } from 'react-final-form';
import { Image, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  Typography,
  ImageView,
  ImageSource,
  TouchableFeedback,
} from '../../ui';
import { Indent } from '../Indent';
import { TextInput } from '../TextInput';
import { styles } from './styles';

type TProps = {
  name: string;
  validate?: (arg: string | undefined) => undefined | string;
  placeholder?: string;
  selfie?: boolean;
};

export const FilePicker = (props: TProps) => {
  const { name, validate, placeholder, selfie } = props;

  return (
    <View>
      <Field name={name} validate={validate}>
        {({ input, meta }) => {
          const error = meta.touched && meta.error;
          console.log('error', error);
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
                    launchImageLibrary({
                      mediaType: 'photo',
                      selectionLimit: 1,
                    }).then(photo => {
                      if (photo?.assets && photo.assets[0]) {
                        input.onChange(photo.assets[0].uri);
                      }
                    });
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
            </View>
          );
        }}
      </Field>
    </View>
  );
};
