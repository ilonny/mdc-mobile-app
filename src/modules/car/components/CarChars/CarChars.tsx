import React, { useContext, useMemo } from 'react';
import { View } from 'react-native';
import { colors } from '../../../../theme';
import { FilterContext } from '../../../filter/context';
import { API_URL } from '../../../httpClient/constants';
import { translate } from '../../../translation';
import { ImageView, Indent, Panel, Typography } from '../../../ui';
import { mapData } from '../../../vehicleType/constants';
import { useVehicleTypeList } from '../../../vehicleType/hooks';
import { TVehicleType } from '../../../vehicleType/types';
import { TCar } from '../../types';
import { styles } from './styles';

type TProps = {
  data: TCar;
};

export const CarChars = (props: TProps) => {
  const { data } = props;
  const { vehicleTypeList } = useVehicleTypeList();
  const imageHref = useMemo(() => {
    const gallery = [...data?.gallery];
    try {
      return gallery.reverse()[1]?.image;
    } catch (e) {
      try {
        return gallery.reverse()[0]?.image;
      } catch (e) {
        return data.main_image;
      }
    }
  }, [data]);

  const vehicleType = useMemo(() => {
    const vh = vehicleTypeList.find(
      v => v.id.toString() === data.vehicle_type_id,
    );
    if (vh?.label) {
      return mapData[vh.label].label;
    }
    return '';
  }, [vehicleTypeList, data]);

  return (
    <Panel>
      <View style={styles.imageWrapper}>
        <ImageView
          style={styles.image}
          href
          source={`${API_URL}/${imageHref}`}
        />
      </View>
      <Indent height={20} />
      <View>
        <Typography.MainText color={colors.secondaryText} fontSize={16}>
          {translate('carClass')}
        </Typography.MainText>
        <Indent height={5} />
        <Typography.BoldText fontSize={16}>{vehicleType}</Typography.BoldText>
      </View>
      <Indent height={20} />
      <View>
        <Typography.MainText color={colors.secondaryText} fontSize={16}>
          {translate('carPower')}
        </Typography.MainText>
        <Indent height={5} />
        <Typography.BoldText fontSize={16}>{data.power}</Typography.BoldText>
      </View>
      <Indent height={20} />
      <View>
        <Typography.MainText color={colors.secondaryText} fontSize={16}>
          {translate('carPower')}
        </Typography.MainText>
        <Indent height={5} />
        <Typography.BoldText fontSize={16}>{data.power}</Typography.BoldText>
      </View>
      <Indent height={20} />
      <View>
        <Typography.MainText color={colors.secondaryText} fontSize={16}>
          {translate('engineVolume')}
        </Typography.MainText>
        <Indent height={5} />
        <Typography.BoldText fontSize={16}>{data.volume}</Typography.BoldText>
      </View>
      <Indent height={20} />
      <View>
        <Typography.MainText color={colors.secondaryText} fontSize={16}>
          {translate('carAcceleration')}
        </Typography.MainText>
        <Indent height={5} />
        <Typography.BoldText fontSize={16}>{data.racing}</Typography.BoldText>
      </View>
      <Indent height={20} />
      <View>
        <Typography.MainText color={colors.secondaryText} fontSize={16}>
          {translate('minDaysRent')}
        </Typography.MainText>
        <Indent height={5} />
        <Typography.BoldText fontSize={16}>1</Typography.BoldText>
      </View>
    </Panel>
  );
};
