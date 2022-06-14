import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { Text, View } from 'react-native';
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
} from '../../../ui';
// import { validateForm } from './helpers';

const required = (value: undefined | string) =>
  value ? undefined : 'Required';

export const UserFilesForm = () => {
  const onSubmit = useCallback((values: Record<string, any>) => {
    console.log('onSubmit: ', values);
  }, []);

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
                name="date_of_birth"
                placeholder={translate('birthdayInput')}
                validate={required}
              />
              <Indent height={20} />
              <FormTextInput
                name="driver_experience"
                placeholder={translate('expInput')}
                validate={required}
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
                placeholder={translate('DriverLicense2')}
                selfie
              />
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
