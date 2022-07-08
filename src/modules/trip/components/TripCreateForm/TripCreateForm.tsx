import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { translate } from '../../../translation';
import {
  Button,
  DatePicker,
  Divider,
  FormCheckBox,
  Indent,
  Typography,
} from '../../../ui';

type TProps = {
  vehicle_id: string;
};

const required = (value: undefined | string) =>
  value ? undefined : 'Required';

export const TripCreateForm = (props: TProps) => {
  const { vehicle_id } = props;
  const onSubmit = useCallback((values: Record<string, any>) => {
    console.log('onSubmit', values);
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ vehicle_id }}
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
              validate={required}
              name="date_start"
              placeholder={translate('dateStart')}
              minDate={new Date()}
            />
            <Indent height={20} />
            <DatePicker
              validate={required}
              name="date_end"
              placeholder={translate('dateEnd')}
              minDate={values.date_start}
            />
            <Indent height={20} />
            <Typography.BoldText fontSize={20}>
              {translate('Additionally')}
            </Typography.BoldText>
            <Indent height={20} />
            <FormCheckBox name="additional_drivers">
              <Typography.BoldText fontSize={15}>
                {translate('additionalDrivers')}
              </Typography.BoldText>
            </FormCheckBox>
            <Indent height={20} />
            <FormCheckBox name="vehicle_delivery">
              <Typography.BoldText fontSize={15}>
                {translate('vehicleDelivery')}
              </Typography.BoldText>
            </FormCheckBox>
            <Indent height={20} />
            <FormCheckBox name="additional_mileage">
              <View>
                <Typography.BoldText fontSize={15}>
                  {translate('additionalMileage')}
                </Typography.BoldText>
                <Typography.MainText color={colors.secondaryText} fontSize={12}>
                  {translate('defaultMileage')}
                </Typography.MainText>
              </View>
            </FormCheckBox>
            <Indent height={20} />
            <FormCheckBox name="abroad">
              <Typography.BoldText fontSize={15}>
                {translate('abroad')}
              </Typography.BoldText>
            </FormCheckBox>
            <Indent height={20} />
            <FormCheckBox name="baby_chair">
              <Typography.BoldText fontSize={15}>
                {translate('babyChair')}
              </Typography.BoldText>
            </FormCheckBox>
            <Indent height={20} />
            <Divider margin={20} />
            <Typography.BoldText fontSize={17}>
              {translate('depositCalculation')}
            </Typography.BoldText>
            <Indent height={10} />
            <Typography.MainText fontSize={13} color={colors.secondaryText}>
              {translate('depositCalculationText')}
            </Typography.MainText>
            <Divider margin={20} />
            <Typography.BoldText fontSize={17}>
              {translate('depositCalculation')}
            </Typography.BoldText>
            <Indent height={10} />
            <Typography.MainText fontSize={13} color={colors.secondaryText}>
              {translate('depositCalculationText')}
            </Typography.MainText>
            <Divider margin={20} />

            {/* <Indent height={20} /> */}
            <Button isWhite onPress={handleSubmit}>
              <Typography.ButtonText color={colors.totalBlack}>
                {translate('OrderBtn')}
              </Typography.ButtonText>
            </Button>
            <Indent height={60} />
            {/* <FormCheckBox /> */}
          </View>
        );
      }}
    />
  );
};
