import { lang } from '../../translation';

export const printPrice = (price: string): string => {
  return (
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
    (lang === 'en' ? '$' : '₽')
  );
};
