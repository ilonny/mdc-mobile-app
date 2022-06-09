import React, { FC } from 'react';
import { ImageStyle, StyleProp } from 'react-native';
import FastImage from 'react-native-fast-image';

interface Props {
  source: Object | string;
  style?: StyleProp<ImageStyle>;
  href?: boolean;
  tintColorProp?: string;
  resizeMode?: string;
  size?: number;
}

export const ImageView: FC<Props> = ({
  source = '',
  style,
  href = false,
  tintColorProp = undefined,
  resizeMode = undefined,
  size,
}) => {
  return (
    //@ts-ignore
    <FastImage
      style={[style, size && { width: size, height: size }]}
      source={
        !href
          ? source
          : {
              uri: source.toString(),
            }
      }
      tintColor={tintColorProp}
      resizeMode={resizeMode}
      // resizeMode={FastImage.resizeMode[resizeMode]}
    />
  );
};
