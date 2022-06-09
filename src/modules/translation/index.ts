import dictionary from './dictionary';
const lang = 'en';

// type TKey = keyof typeof dictionary;
// type TTranslation = Record<TKey, string>;

// let t: TTranslation;

// //@ts-ignore
// Object.keys(dictionary).forEach((key: TKey) => {
//   t[key] = dictionary[key][lang];
// });

// export const translation = t;

export const translate = (key: keyof typeof dictionary) => {
  return dictionary[key][lang] || key;
};
