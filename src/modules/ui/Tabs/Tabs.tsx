import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../theme';
import { Indent } from '../Indent';
import { Row } from '../Row';
import { TouchableFeedback } from '../TouchableFeedback';
import { Typography } from '../Typography';
import { styles } from './styles';

type TProps = {
  activeIndex: number;
  tabs: Array<string>;
  onChange: (index: number) => void;
};

export const Tabs = (props: TProps) => {
  const { activeIndex, tabs, onChange } = props;
  return (
    <Row flex={1}>
      {tabs?.map((tab: string, index: number) => {
        const isActive = activeIndex === index;
        return (
          <Row flex={1} key={tab}>
            {index !== 0 ? <Indent width={10} /> : <></>}
            <TouchableFeedback
              onPress={() => onChange(index)}
              key={tab}
              style={[styles.tabWrapper, isActive && styles.tabActive]}>
              {index !== 0 && <Indent width={12} />}
              <View style={[styles.tab]}>
                <Typography.BoldText
                  color={isActive ? '#fff' : colors.secondaryGray}
                  textAlign="center">
                  {tab}
                </Typography.BoldText>
              </View>
            </TouchableFeedback>
          </Row>
        );
      })}
    </Row>
  );
};
