import React, { useCallback, useContext, useMemo, useState } from 'react';
import Modal from 'react-native-modal';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import { lang, translate } from '../../../translation';
import {
  Button,
  FilterButton,
  Indent,
  Row,
  SecondaryButton,
  Select,
  TextInput,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { useVehicleMarkList } from '../../../vehicleMark/hooks';
import { FilterContext } from '../../context';
import { styles as pickerStyles } from '../../../ui/DatePicker/styles';
import { colors } from '../../../../theme';
import { useVehicleColorList } from '../../../vehicleColor/hooks';
import { colorTransition } from '../../../vehicleColor/constants';
import { TOption } from '../../../ui/Select/Select';

export const VehicleFilters = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisiblePrice, setModalVisiblePrice] = useState(false);

  const [powerFromState, setPowerFromState] = useState('');
  const [powerToState, setPowerToState] = useState('');

  const [priceFromState, setPriceFromState] = useState('');
  const [priceToState, setPriceToState] = useState('');

  const {
    mark,
    setMark,
    setMarkId,
    setPowerTo,
    setPowerFrom,
    powerFrom,
    powerTo,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    color,
    setColor,
    setColorId,
  } = useContext(FilterContext);
  const { vehicleMarkList, vehicleMarkListLoading } = useVehicleMarkList();
  const { vehicleColorList, vehicleColorListLoading } = useVehicleColorList();

  const markOptions = useMemo(() => {
    return (
      vehicleMarkList?.map((mark: { label: string; id: number }) => {
        const val = mark.label;
        return {
          value: val,
          label: val,
          extraData: mark.id.toString(),
        };
      }) || []
    );
  }, [vehicleMarkList]);

  const colorOptions = useMemo(() => {
    return (
      vehicleColorList?.map(
        (color: {
          label: keyof typeof colorTransition;
          id: number;
        }): TOption => {
          const val: keyof typeof colorTransition = color.label;
          try {
            return {
              value: colorTransition[val][lang] || '',
              label: colorTransition[val][lang] || '',
              extraData: color.id.toString(),
            };
          } catch (e) {
            return {
              value: val || '',
              label: val || '',
              extraData: color.id.toString(),
            };
          }
        },
      ) || []
    );
  }, [vehicleColorList]);

  const onChangeMark = useCallback((val: string, extraId?: any) => {
    setMark(val);
    setMarkId(extraId);
  }, []);

  const onChangeColor = useCallback((val: string, extraId?: any) => {
    setColor(val);
    setColorId(extraId);
  }, []);

  const closeModalCb = useCallback(() => {
    setModalVisible(false);
  }, []);

  const closeModalCbPrice = useCallback(() => {
    setModalVisiblePrice(false);
  }, []);

  if (vehicleMarkListLoading || vehicleColorListLoading) {
    return (
      <Row alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Row>
    );
  }

  return (
    <ScrollView horizontal>
      <Row>
        <Select
          options={markOptions}
          onChange={onChangeMark}
          multiple
          value={mark}>
          <FilterButton isActive={!!mark?.length}>
            {translate('filterMark')}
          </FilterButton>
        </Select>
        <Indent width={10} />
        <TouchableFeedback onPress={() => setModalVisible(true)}>
          <FilterButton isActive={!!powerFrom || !!powerTo}>
            {translate('filterPower')}
          </FilterButton>
        </TouchableFeedback>
        <Indent width={10} />
        <TouchableFeedback onPress={() => setModalVisiblePrice(true)}>
          <FilterButton isActive={!!priceFrom || !!priceTo}>
            {translate('filterPrice')}
          </FilterButton>
        </TouchableFeedback>
        <Indent width={10} />
        <Select
          options={colorOptions}
          onChange={onChangeColor}
          multiple
          value={color}>
          <FilterButton isActive={!!color?.length}>
            {translate('filterColor')}
          </FilterButton>
        </Select>
      </Row>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeModalCb}
        style={[pickerStyles.modal]}
        backdropOpacity={0.6}>
        <KeyboardAvoidingView style={pickerStyles.modal} behavior="padding">
          {/* <ScrollView contentContainerStyle={pickerStyles.modal}> */}
          <View style={[pickerStyles.modalBottomContent]}>
            <View style={[pickerStyles.calendarWrapper]}>
              <View style={pickerStyles.calendarHeaderRow}>
                <View />
                <SecondaryButton isWhite onPress={closeModalCb}>
                  {translate('closeModal')}
                </SecondaryButton>
              </View>
              <Indent height={28} />
              <View style={{ height: 60 }}>
                <TextInput
                  isBlack
                  placeholder={translate('powerFrom')}
                  value={powerFromState}
                  onChangeText={setPowerFromState}
                  keyboardType="numeric"
                />
              </View>
              <Indent height={28} />
              <View style={{ height: 60 }}>
                <TextInput
                  isBlack
                  placeholder={translate('powerTo')}
                  value={powerToState}
                  onChangeText={setPowerToState}
                  keyboardType="numeric"
                />
              </View>
              <Indent height={28} />
              <Button
                isWhite
                onPress={() => {
                  setPowerFrom(powerFromState);
                  setPowerTo(powerToState);
                  closeModalCb();
                }}>
                <Typography.ButtonText color={colors.totalBlack}>
                  {translate('saveFilter')}
                </Typography.ButtonText>
              </Button>
              <Button
                onPress={() => {
                  setPowerFromState('');
                  setPowerToState('');
                  setPowerFrom('');
                  setPowerTo('');
                  closeModalCb();
                }}>
                <Typography.ButtonText>
                  {translate('resetFilter')}
                </Typography.ButtonText>
              </Button>
            </View>
          </View>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </Modal>
      <Modal
        isVisible={isModalVisiblePrice}
        onBackdropPress={closeModalCbPrice}
        style={[pickerStyles.modal]}
        backdropOpacity={0.6}>
        <KeyboardAvoidingView style={pickerStyles.modal} behavior="padding">
          {/* <ScrollView contentContainerStyle={pickerStyles.modal}> */}
          <View style={[pickerStyles.modalBottomContent]}>
            <View style={[pickerStyles.calendarWrapper]}>
              <View style={pickerStyles.calendarHeaderRow}>
                <View />
                <SecondaryButton isWhite onPress={closeModalCbPrice}>
                  {translate('closeModal')}
                </SecondaryButton>
              </View>
              <Indent height={28} />
              <View style={{ height: 60 }}>
                <TextInput
                  isBlack
                  placeholder={translate('priceFrom')}
                  value={priceFromState}
                  onChangeText={setPriceFromState}
                  keyboardType="numeric"
                />
              </View>
              <Indent height={28} />
              <View style={{ height: 60 }}>
                <TextInput
                  isBlack
                  placeholder={translate('priceTo')}
                  value={priceToState}
                  onChangeText={setPriceToState}
                  keyboardType="numeric"
                />
              </View>
              <Indent height={28} />
              <Button
                isWhite
                onPress={() => {
                  setPriceFrom(priceFromState);
                  setPriceTo(priceToState);
                  closeModalCbPrice();
                }}>
                <Typography.ButtonText color={colors.totalBlack}>
                  {translate('saveFilter')}
                </Typography.ButtonText>
              </Button>
              <Button
                onPress={() => {
                  setPriceFromState('');
                  setPriceToState('');
                  setPriceFrom('');
                  setPriceTo('');
                  closeModalCbPrice();
                }}>
                <Typography.ButtonText>
                  {translate('resetFilter')}
                </Typography.ButtonText>
              </Button>
            </View>
          </View>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </Modal>
    </ScrollView>
  );
};
