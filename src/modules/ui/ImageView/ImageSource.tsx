declare var require: any;

const imageSrc = '../../../assets/';

export const ImageSource = {
  onboarding_bg: require(imageSrc + 'onboarding_bg.png'),
  logo: require(imageSrc + 'logo.png'),
};

export type TImageSource = keyof typeof ImageSource;
