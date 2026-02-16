import React, { FC } from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  ImageSourcePropType,
} from 'react-native';

interface Props {
  // source теперь может быть либо ImageSourcePropType (для require или { uri: ... }),
  // либо просто string (для URL, если href = true).
  source: ImageSourcePropType | string;
  style?: StyleProp<ImageStyle>;
  href?: boolean; // Указывает, что source - это URL строка
  tintColorProp?: string;
  // resizeMode теперь использует строковые значения, как 'cover', 'contain'
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  size?: number;
}

export const ImageView: FC<Props> = ({
  source, // Убрал дефолтное '', т.к. ImageSourcePropType не может быть пустой строкой. Лучше передавать валидный source или null.
  style,
  href = false,
  tintColorProp, // Убрал дефолтное undefined, т.к. optional props и так undefined по умолчанию.
  resizeMode,
  size,
}) => {
  // Подготовка prop source для компонента Image
  let finalSource: ImageSourcePropType;
  if (href && typeof source === 'string') {
    // Если href = true и source - строка, то это URL
    finalSource = { uri: source };
  } else if (typeof source === 'string') {
    // Если href = false, но source все равно строка, предполагаем, что это URL.
    // FastImage мог принимать сырые строки, Image ожидает { uri: '...' }.
    finalSource = { uri: source };
  } else {
    // В противном случае source уже является ImageSourcePropType (число от require или { uri: '...' })
    finalSource = source;
  }

  // Дефолтный fallback на случай, если source не был предоставлен или некорректен
  // (хотя лучше бы source был обязательным пропсом или обрабатывался на уровне родителя)
  if (!finalSource) {
    console.warn("ImageView received an invalid or missing 'source' prop.");
    // Можно вернуть null или placeholder-изображение
    return null;
  }
  // Если source был пустой строкой в оригинале (source = ''), то finalSource.uri будет ''.
  // React Native Image корректно обрабатывает { uri: '' } как отсутствие изображения.

  return (
    <Image
      style={[
        style,
        size && { width: size, height: size },
        tintColorProp && { tintColor: tintColorProp }, // Применение tintColor через style
      ]}
      source={finalSource}
      resizeMode={resizeMode} // resizeMode передается как строка
    />
  );
};
