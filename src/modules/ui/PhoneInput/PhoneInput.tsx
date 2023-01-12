import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import CountryPicker, {
  Country,
  CountryModalProvider,
  CountryCode,
  DARK_THEME,
  Flag,
} from 'react-native-country-picker-modal';
import { Indent } from '../Indent';
import { Row } from '../Row';
import { TouchableFeedback } from '../TouchableFeedback';
import { Typography } from '../Typography';
import { styles } from './styles';

type TProps = {
  onChange: (text: string) => void;
};

export const PhoneInput = (props: TProps) => {
  const { onChange } = props;
  const [code, setCode] = useState('7');
  const [countryCode, setCountryCode] = useState<CountryCode>('RU');
  const [country, setCountry] = useState<Country>(null);
  const onSelect = (country: Country) => {
    setCode(country.callingCode[0]);
    setCountryCode(country.cca2);
    setCountry(country);
  };
  const [visible, setVisible] = useState(false);
  const onChangeWithCode = (phone: string) => {
    onChange(code + phone);
  };
  return (
    <CountryModalProvider>
      <View style={styles.wrapper}>
        {/* <Typography.BoldText fontSize={34}>{code}</Typography.BoldText> */}
        <CountryPicker
          {...{
            translation: 'rus',
            theme: DARK_THEME,
            countryCode,
            withFilter: true,
            withFlag: true,
            withCountryNameButton: true,
            withAlphaFilter: true,
            withCallingCode: true,
            withEmoji: true,
            onSelect,
            onOpen: () => setVisible(true),
            onClose: () => setVisible(false),
            renderFlagButton: props => {
              return (
                <>
                  <TouchableFeedback onPress={() => setVisible(true)}>
                    <Row>
                      <Flag
                        {...{
                          withEmoji: true,
                          countryCode,
                          withFlagButton: true,
                          flagSize: 30,
                        }}
                      />
                      <Typography.BoldText fontSize={34}>
                        +{code}
                      </Typography.BoldText>
                    </Row>
                  </TouchableFeedback>
                </>
              );
            },
          }}
          visible={visible}
        />
        <TextInput
          autoFocus
          onChangeText={onChangeWithCode}
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="999 123 45 67"
        />
      </View>
    </CountryModalProvider>
  );
};
