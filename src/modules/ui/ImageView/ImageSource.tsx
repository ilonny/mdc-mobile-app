declare var require: any;

const imageSrc = '../../../assets/';

export const ImageSource = {
  onboarding_bg: require(imageSrc + 'onboarding_bg.png'),
  logo: require(imageSrc + 'logo.png'),
  onboarding_1: require(imageSrc + 'onboarding_1.png'),
  onboarding_2: require(imageSrc + 'onboarding_2.png'),
  onboarding_3: require(imageSrc + 'onboarding_3.png'),
  onboarding_hearts: require(imageSrc + 'onboarding_hearts.png'),
  onboarding_push: require(imageSrc + 'onboarding_push.png'),
};

export type TImageSource = keyof typeof ImageSource;
