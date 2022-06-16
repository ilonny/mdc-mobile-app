import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { Linking, Text, View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import {
  Typography,
  TextInput,
  Indent,
  FormTextInput,
  DatePicker,
  FilePicker,
  Button,
  ImageView,
  ImageSource,
  Row,
  CheckBox,
  FormCheckBox,
  TouchableFeedback,
} from '../../../ui';
import { useSetUserData } from '../../hooks';
import { styles } from './styles';
// import { validateForm } from './helpers';

const required = (value: undefined | string) =>
  value ? undefined : 'Required';

type TProps = {
  onSubmit: (values: Record<string, any>) => void;
};

export const UserFilesForm = (props: TProps) => {
  const { onSubmit } = props;

  return (
    <View>
      <Form
        onSubmit={onSubmit}
        // validate={validateForm}
        render={({ form, handleSubmit, submitting, pristine }) => {
          return (
            <View>
              <FormTextInput
                validate={required}
                name="name"
                placeholder={translate('yourNameInput')}
              />
              <Indent height={20} />
              <DatePicker
                name="birth_date"
                placeholder={translate('birthdayInput')}
                validate={required}
              />
              <Indent height={20} />
              <FormTextInput
                name="driver_experience"
                placeholder={translate('expInput')}
                validate={required}
                keyboardType="numeric"
              />
              <Indent height={50} />
              <Typography.BoldText fontSize={32}>
                {translate('Passport')}
              </Typography.BoldText>
              <Indent height={20} />
              <FilePicker
                name="passport_first_page"
                validate={required}
                placeholder={translate('PassportPickerPlaceholder')}
              />
              <Indent height={20} />
              <FilePicker
                name="passport_second_page"
                validate={required}
                placeholder={translate('PassportPickerPlaceholder2')}
              />
              <Indent height={50} />
              <Typography.BoldText fontSize={32}>
                {translate('DriverLicense')}
              </Typography.BoldText>
              <Indent height={20} />
              <FilePicker
                name="driver_license_first_page"
                validate={required}
                placeholder={translate('DriverLicense1')}
              />
              <Indent height={20} />
              <FilePicker
                name="driver_license_second_page"
                validate={required}
                placeholder={translate('DriverLicense2')}
              />
              <Indent height={50} />
              <Typography.BoldText fontSize={32}>
                {translate('Selfie')}
              </Typography.BoldText>
              <Indent height={20} />
              <FilePicker
                name="selfie"
                validate={required}
                placeholder={translate('Selfie')}
                selfie
              />
              <View style={styles.line} />
              <Row justifyContent="center">
                <ImageView source={ImageSource.warning} size={32} />
              </Row>
              <Indent height={20} />
              <Typography.BoldText
                textAlign="center"
                fontSize={16}
                color={'rgba(255,255,255, 0.8)'}>
                {translate('filesSecureText')}
              </Typography.BoldText>
              <View style={styles.line} />
              <Indent height={20} />
              <FormCheckBox name="agree_with_privacy" validate={required}>
                <Row>
                  <Text>
                    <Typography.BoldText color="#fff">
                      {translate('agreeWithConditions')}{' '}
                    </Typography.BoldText>
                    <TouchableFeedback
                      style={{ marginTop: -2.5 }}
                      onPress={() =>
                        Linking.openURL('https://www.google.com/')
                      }>
                      <Typography.BoldText textDecorationLine="underline">
                        {translate('dataProcessing')}
                      </Typography.BoldText>
                    </TouchableFeedback>
                  </Text>
                </Row>
              </FormCheckBox>
              <Indent height={20} />
              <FormCheckBox name="agree_with_offer" validate={required}>
                <Row>
                  <Text>
                    <Typography.BoldText color="#fff">
                      {translate('agreeWithConditions')}{' '}
                    </Typography.BoldText>
                    <TouchableFeedback
                      style={{ marginTop: -2.5 }}
                      onPress={() =>
                        Linking.openURL('https://www.google.com/')
                      }>
                      <Typography.BoldText textDecorationLine="underline">
                        {translate('offer')}
                      </Typography.BoldText>
                    </TouchableFeedback>
                  </Text>
                </Row>
              </FormCheckBox>
              <Indent height={20} />
              <Button isWhite onPress={handleSubmit}>
                <Typography.ButtonText color={colors.totalBlack}>
                  {translate('send')}
                </Typography.ButtonText>
              </Button>
            </View>
          );
        }}
      />
    </View>
  );
};
