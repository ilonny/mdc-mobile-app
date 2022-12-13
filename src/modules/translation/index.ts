import dictionary from './dictionary';
export const lang = 'ru';

// type TKey = keyof typeof dictionary;
// type TTranslation = Record<TKey, string>;

// let t: TTranslation;

// //@ts-ignore
// Object.keys(dictionary).forEach((key: TKey) => {
//   t[key] = dictionary[key][lang];
// });

// export const translation = t;

export const translate = (key: keyof typeof dictionary) => {
  try {
    return dictionary[key][lang];
  } catch (e) {
    return key;
  }
};
