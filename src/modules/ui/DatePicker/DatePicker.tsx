import React, { useState, useCallback, useRef } from 'react';
import { Masks } from 'react-native-mask-input';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Field, useForm } from 'react-final-form';
import CalendarPicker from 'react-native-calendar-picker';
import moment, { Moment } from 'moment';
import {
  TextInput,
  TouchableFeedback,
  SecondaryButton,
  Indent,
  ImageSource,
  ImageView,
} from '../../ui';
import { deviceWidth } from '../../device';
import { colors } from '../../../theme';
import { styles } from './styles';

type TProps = {
  name: string;
  validate?: (arg: string | undefined) => undefined | string;
  placeholder?: string;
  onDateChange?: (date: string) => void;
  minDate?: any;
};

const customDayHeaderStylesCallback = () => {
  return { textStyle: styles.calendarHeaderDay };
};

const customDatesStylesCallback = () => {
  return {
    containerStyle: {
      borderRadius: 12,
    },
    textStyle: {
      color: '#fff',
      fontFamily: 'Inter-Regular',
      fontSize: 15,
    },
  };
};

export const DatePicker = (props: TProps) => {
  const form = useForm();
  const inputRef = useRef();
  const { name, validate, placeholder, onDateChange, minDate } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<null | Moment>(null);
  const openModalCb = useCallback(() => setModalVisible(true), []);
  const closeModalCb = useCallback(() => {
    setModalVisible(false);
    setTimeout(() => {
      inputRef?.current?.blur();
    }, 500);
  }, []);
  const doneCallback = useCallback(() => {
    if (selectedDate) {
      const dateFormatted = selectedDate.format('MM/DD/YYYY');
      if (typeof onDateChange === 'function') {
        onDateChange(dateFormatted);
      }
      if (form?.change) {
        form.change(name, dateFormatted);
      }
    }
    closeModalCb();
  }, [onDateChange, selectedDate, closeModalCb, form, name]);
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => {
        return (
          <View>
            <TextInput
              ref={inputRef}
              mask={Masks.DATE_MMDDYYYY}
              keyboardType="numeric"
              placeholder={placeholder}
              onChangeText={input.onChange}
              value={input.value}
              error={meta.touched && meta.error}
              onBlur={() => {
                // input.onBlur();
              }}
              onFocus={() => {
                // input.onFocus();
                // openModalCb();
              }}
              rightIconName="calendar"
            />
            <TouchableFeedback
              style={styles.touchableWrapper}
              onPress={openModalCb}
            />
            <Modal
              isVisible={isModalVisible}
              onBackdropPress={closeModalCb}
              style={styles.modal}
              backdropOpacity={0.6}>
              <View style={styles.modalBottomContent}>
                <View style={styles.calendarWrapper}>
                  <View style={styles.calendarHeaderRow}>
                    <SecondaryButton isWhite onPress={closeModalCb}>
                      Cancel
                    </SecondaryButton>
                    <SecondaryButton isWhite onPress={doneCallback} bold>
                      Done
                    </SecondaryButton>
                  </View>
                  <Indent height={28} />
                  <CalendarPicker
                    onDateChange={date => {
                      setSelectedDate(date);
                    }}
                    minDate={minDate}
                    dayShape="square"
                    weekdays={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
                    startFromMonday={true}
                    width={deviceWidth - 36}
                    showDayStragglers
                    // selectedDayColor={'red'}
                    monthTitleStyle={styles.monthTitleStyle}
                    yearTitleStyle={styles.yearTitleStyle}
                    dayLabelsWrapper={styles.dayLabelsWrapper}
                    customDayHeaderStyles={customDayHeaderStylesCallback}
                    customDatesStyles={customDatesStylesCallback}
                    todayBackgroundColor="#fff"
                    todayTextStyle={styles.todayTextStyle}
                    selectedDayColor={colors.totalBlack}
                    selectedDayStyle={styles.selectedDayStyle}
                    selectedDayTextColor={colors.totalBlack}
                    textStyle={styles.calendarTextStyle}
                    previousComponent={
                      <ImageView
                        source={ImageSource.chevron_back}
                        tintColorProp={colors.secondaryText}
                        style={styles.iconCalendar}
                      />
                    }
                    nextComponent={
                      <ImageView
                        source={ImageSource.chevron_forward}
                        tintColorProp={colors.secondaryText}
                        style={styles.iconCalendar}
                      />
                    }
                  />
                </View>
              </View>
            </Modal>
          </View>
        );
      }}
    </Field>
  );
};
