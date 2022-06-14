import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { Text, View } from 'react-native';
import { translate } from '../../../translation';
import {
  Typography,
  TextInput,
  Indent,
  FormTextInput,
  DatePicker,
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
              <TextInput placeholder={translate('expInput')} />
            </View>
          );
        }}
      />
    </View>
  );
};
