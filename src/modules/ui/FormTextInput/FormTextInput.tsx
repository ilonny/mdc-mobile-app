import React from 'react';
import { TextInputProps } from 'react-native';
import { Field } from 'react-final-form';
import { TextInput } from '../../ui';

type TProps = {
  name: string;
  validate?: (arg: string | undefined) => undefined | string;
  placeholder?: string;
  secureTextEntry?: TextInputProps['secureTextEntry'];
};

export const FormTextInput = (props: TProps) => {
  const { name, validate, placeholder, secureTextEntry } = props;
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => {
        return (
          <TextInput
            placeholder={placeholder}
            onChangeText={input.onChange}
            value={input.value}
            error={meta.touched && meta.error}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            secureTextEntry={secureTextEntry}
          />
        );
      }}
    </Field>
  );
};
