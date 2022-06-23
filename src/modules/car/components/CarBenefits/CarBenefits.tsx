import React from 'react';
import { View } from 'react-native';
import { translate } from '../../../translation';
import { ImageSource, ImageView, Row, Typography } from '../../../ui';
import { styles } from './styles';

export const CarBenefits = () => {
  return (
    <View>
      <View style={styles.row}>
        <Row>
          <View style={styles.imageWrapper}>
            <ImageView
              style={{ width: 42, height: 40 }}
              source={ImageSource.ben_1}
            />
          </View>
          <View style={styles.textWrapper}>
            <Typography.BoldText>{translate('ben_1')}</Typography.BoldText>
          </View>
        </Row>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <Row>
          <View style={styles.imageWrapper}>
            <ImageView
              style={{ width: 50, height: 33 }}
              source={ImageSource.ben_2}
            />
          </View>
          <View style={styles.textWrapper}>
            <Typography.BoldText>{translate('ben_2')}</Typography.BoldText>
          </View>
        </Row>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <Row>
          <View style={styles.imageWrapper}>
            <ImageView
              style={{ width: 40, height: 35 }}
              source={ImageSource.ben_3}
            />
          </View>
          <View style={styles.textWrapper}>
            <Typography.BoldText>{translate('ben_3')}</Typography.BoldText>
          </View>
        </Row>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <Row>
          <View style={styles.imageWrapper}>
            <ImageView
              style={{ width: 40, height: 40 }}
              source={ImageSource.ben_4}
            />
          </View>
          <View style={styles.textWrapper}>
            <Typography.BoldText>{translate('ben_4')}</Typography.BoldText>
          </View>
        </Row>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <Row>
          <View style={styles.imageWrapper}>
            <ImageView
              style={{ width: 40, height: 43 }}
              source={ImageSource.ben_5}
            />
          </View>
          <View style={styles.textWrapper}>
            <Typography.BoldText>{translate('ben_5')}</Typography.BoldText>
          </View>
        </Row>
      </View>
    </View>
  );
};
