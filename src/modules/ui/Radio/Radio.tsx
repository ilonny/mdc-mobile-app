import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ImageSource, ImageView } from '../ImageView';
import { Indent } from '../Indent';
import { Row } from '../Row';
import { TouchableFeedback } from '../TouchableFeedback';

type TProps = {
  children: any;
  fullwidth?: boolean;
  onPress?: (arg?: any) => void;
  initialChecked?: boolean;
  disabled?: boolean;
};

export const Radio = (props: TProps) => {
  const {
    children,
    fullwidth,
    onPress,
    initialChecked = false,
    disabled = false,
  } = props;
  const [checked, setChecked] = useState(initialChecked);

  useEffect(() => {
    setChecked(initialChecked);
  }, [initialChecked]);

  return (
    <View style={fullwidth && { width: '100%' }}>
      <TouchableFeedback
        onPress={() => {
          if (disabled) {
            return false;
          }
          if (typeof onPress === 'function') {
            onPress();
          }
          setChecked(!checked);
        }}>
        <Row>
          <ImageView
            size={22}
            source={checked ? ImageSource.radio_checked : ImageSource.radio}
          />
          <Indent width={20} />
          <Row flex={1}>{children}</Row>
        </Row>
      </TouchableFeedback>
    </View>
  );
};
