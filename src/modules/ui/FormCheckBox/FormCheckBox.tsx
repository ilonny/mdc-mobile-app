import React, { useState } from 'react';
import { Field } from 'react-final-form';
import { View } from 'react-native';
import { colors } from '../../../theme';
import { ImageSource, ImageView } from '../ImageView';
import { Indent } from '../Indent';
import { Row } from '../Row';
import { TextInput } from '../TextInput';
import { TouchableFeedback } from '../TouchableFeedback';
import { Typography } from '../Typography';
import { styles } from './styles';

type TProps = {
  name: string;
  validate?: (arg: string | undefined) => undefined | string;
  placeholder?: string;
  children: any;
};

export const FormCheckBox = (props: TProps) => {
  const { name, validate, placeholder, children } = props;
  const [checked, setChecked] = useState(false);
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => {
        const error = meta.touched && meta.error;
        return (
          <View>
            <View style={styles.hiddenView}>
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
                setChecked(!checked);
                input.onChange(!checked ? '1' : undefined);
              }}>
              <Row>
                <ImageView
                  size={22}
                  source={
                    checked
                      ? ImageSource.checkbox_checked
                      : ImageSource.checkbox
                  }
                />
                <Indent width={20} />
                <Row flex={1}>{children}</Row>
              </Row>
            </TouchableFeedback>
            {!!error && (
              <Typography.BoldText color={colors.red}>
                {error}
              </Typography.BoldText>
            )}
          </View>
        );
      }}
    </Field>
  );
};
