import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import { DatePicker, FormCheckBox, Indent, Typography } from '../../../ui';

export const TripCreateForm = () => {
  const onSubmit = useCallback((values: Record<string, any>) => {
    console.log('onSubmit', values);
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      // validate={validateForm}
      render={({ form, handleSubmit, submitting, pristine, values }) => {
        return (
          <View>
            <Typography.BoldText fontSize={20}>
              {translate('tripCreateDateTitle')}
            </Typography.BoldText>
            <Indent height={7} />
            <Typography.MainText color={colors.secondaryText}>
              {translate('tripCreateDateDescription')}
            </Typography.MainText>
            <Indent height={20} />
            <DatePicker
              name="date_start"
              placeholder={translate('dateStart')}
              minDate={new Date()}
            />
            <Indent height={20} />
            <DatePicker name="date_end" placeholder={translate('dateEnd')} minDate={values.date_start} />
            <Indent height={20} />
            <Typography.BoldText fontSize={20}>
              {translate('Additionally')}
            </Typography.BoldText>
            {/* <FormCheckBox /> */}
          </View>
        );
      }}
    />
  );
};
