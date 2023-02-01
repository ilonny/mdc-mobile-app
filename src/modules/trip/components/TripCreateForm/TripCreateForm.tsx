import moment from 'moment';
import React, { useCallback, useMemo, useState } from 'react';
import { Form } from 'react-final-form';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { printPrice } from '../../../car/helpers';
import { useCarData } from '../../../car/hooks';
import {
  BOOKING_DEPOSIT_AMOUNT,
  DEFAULT_MILEAGE,
} from '../../../core/constants';
import { PaymentDepositModal } from '../../../payment/components';
import { translate } from '../../../translation';
import {
  Button,
  DatePicker,
  Divider,
  FormCheckBox,
  Indent,
  Panel,
  Row,
  Typography,
} from '../../../ui';
import { getTripPrice } from '../../helpers';

type TProps = {
  vehicle_id: string;
};

const required = (value: undefined | string) =>
  value ? undefined : 'Required';

export const TripCreateForm = (props: TProps) => {
  const { vehicle_id } = props;

  const [payModalIsVisible, setPayModalIsVisible] = useState(false);
  const [tripData, setTripData] = useState<null | Record<any, any>>(null);

  const { carData } = useCarData(vehicle_id);

  const [dateStart, setDateStart] = useState<null | string>(null);
  const [dateEnd, setDateEnd] = useState<null | string>(null);

  const dayDiff = useMemo(() => {
    if (dateStart && dateEnd) {
      const mStart = moment(dateStart);
      const mEnd = moment(dateEnd);
      const diff = mEnd.diff(mStart, 'days');
      if (diff == 0) {
        return 1;
      }
      if (diff >= 0) {
        return diff;
      }
      return 0;
    }
    return 0;
  }, [dateStart, dateEnd]);

  const rentPrice = useMemo(() => {
    return getTripPrice(carData?.tariffs || [], dayDiff);
  }, [carData?.tariffs, dayDiff]);

  const includedMileage = useMemo(() => {
    if (dayDiff >= 1) {
      return dayDiff * DEFAULT_MILEAGE;
    }
    return DEFAULT_MILEAGE;
  }, [dayDiff]);

  const onSubmit = useCallback(
    (values: Record<any, any>) => {
      const params = {
        ...values,
        price: rentPrice,
        insurance_deposit: carData?.insurance_deposit,
        insurance_payed: carData?.insurance_deposit,
        mileage: includedMileage,
        status: 'CREATED',
      };
      // console.log('onSubmit', params);
      setTripData(params);
      setPayModalIsVisible(true);
    },
    [rentPrice, carData?.insurance_deposit, includedMileage],
  );

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
              onDateChange={setDateStart}
            />
            <Indent height={20} />
            <DatePicker
              validate={required}
              name="date_end"
              placeholder={translate('dateEnd')}
              minDate={values.date_start}
              onDateChange={setDateEnd}
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
                  {translate('defaultMileage')} {includedMileage.toString()}{' '}
                  {translate('km')}
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
              {translate('depositCancellation')}
            </Typography.BoldText>
            <Indent height={10} />
            <Typography.MainText fontSize={13} color={colors.secondaryText}>
              {translate('depositCancellationText')}
            </Typography.MainText>
            <Divider margin={20} />

            {/* <Indent height={20} /> */}
            <Panel fullWidth>
              <Row justifyContent="space-between">
                <Typography.BoldText fontSize={20}>
                  {translate('rentCost')}
                </Typography.BoldText>
                <Typography.BoldText fontSize={20}>
                  {rentPrice !== 0
                    ? printPrice(rentPrice.toString())
                    : 'Discuss'}
                </Typography.BoldText>
              </Row>
              <Indent height={20} />
              <Row justifyContent="space-between" alignItems="flex-start">
                <View style={{ maxWidth: '70%' }}>
                  <Typography.BoldText fontSize={14}>
                    {translate('insuranceDepositCost')}
                  </Typography.BoldText>
                  <Indent height={7} />
                  <Typography.MainText
                    fontSize={14}
                    color={colors.secondaryText}>
                    {translate('insuranceDepositCostDesc')}
                  </Typography.MainText>
                </View>
                <Typography.BoldText fontSize={14} flex={1} textAlign="right">
                  {printPrice(carData?.insurance_deposit)}
                </Typography.BoldText>
              </Row>
              <Indent height={20} />
              <Button isWhite onPress={handleSubmit}>
                <Typography.ButtonText color={colors.totalBlack}>
                  {translate('OrderBtn')}
                </Typography.ButtonText>
              </Button>
              <Indent height={20} />
            </Panel>
            {/* <FormCheckBox /> */}
            <PaymentDepositModal
              isVisible={payModalIsVisible}
              setIsVisible={setPayModalIsVisible}
              tripData={tripData || {}}
            />
          </View>
        );
      }}
    />
  );
};
