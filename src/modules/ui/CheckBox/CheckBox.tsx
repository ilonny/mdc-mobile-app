import React, { useState } from 'react';
import { View } from 'react-native';
import { ImageSource, ImageView } from '../ImageView';
import { Indent } from '../Indent';
import { Row } from '../Row';
import { TouchableFeedback } from '../TouchableFeedback';

type TProps = {
  children: any;
};

export const CheckBox = (props: TProps) => {
  const { children } = props;
  const [checked, setChecked] = useState(false);
  return (
    <View>
      <TouchableFeedback onPress={() => {
        setChecked(!checked);
      }}>
        <Row>
          <ImageView
            size={22}
            source={
              checked ? ImageSource.checkbox_checked : ImageSource.checkbox
            }
          />
          <Indent width={20} />
          <Row flex={1}>{children}</Row>
        </Row>
      </TouchableFeedback>
    </View>
  );
};
