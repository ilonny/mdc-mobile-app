import React, { useCallback, useContext, useMemo, useState } from 'react';
import Modal from 'react-native-modal';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import { translate } from '../../../translation';
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

export const VehicleFilters = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [powerFromState, setPowerFromState] = useState('');
  const [powerToState, setPowerToState] = useState('');

  const {
    mark,
    setMark,
    setMarkId,
    setPowerTo,
    setPowerFrom,
    powerFrom,
    powerTo,
  } = useContext(FilterContext);
  const { vehicleMarkList, vehicleMarkListLoading } = useVehicleMarkList();

  const markOptions = useMemo(() => {
    return (
      vehicleMarkList
        ?.map((mark: { label: string; id: number }) => {
          const val = mark.label;
          return {
            value: val,
            label: val,
            extraData: mark.id.toString(),
          };
        })
        .concat({ label: translate('allMarks'), value: '', extraData: '' }) ||
      []
    );
  }, [vehicleMarkList]);

  const onChangeMark = useCallback((val: string, extraId?: any) => {
    setMark(val);
    setMarkId(extraId);
  }, []);

  const closeModalCb = useCallback(() => {
    setModalVisible(false);
  }, []);

  if (vehicleMarkListLoading) {
    return (
      <Row alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Row>
    );
  }

  return (
    <ScrollView horizontal>
      <Row>
        <Select options={markOptions} onChange={onChangeMark}>
          <FilterButton isActive={!!mark}>
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
        <TouchableFeedback>
          <FilterButton>{translate('filterPrice')}</FilterButton>
        </TouchableFeedback>
        <Indent width={10} />
        <TouchableFeedback>
          <FilterButton>{translate('filterColor')}</FilterButton>
        </TouchableFeedback>
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
    </ScrollView>
  );
};
