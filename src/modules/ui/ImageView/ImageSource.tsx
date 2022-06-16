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
  onboarding_gradient_mask: require(imageSrc + 'onboarding_gradient_mask.png'),
  calendar: require(imageSrc + 'calendar.png'),
  chevron_back: require(imageSrc + 'chevron-back.png'),
  chevron_forward: require(imageSrc + 'chevron-forward.png'),
  upload: require(imageSrc + 'upload.png'),
  x_red: require(imageSrc + 'x_red.png'),
  retake: require(imageSrc + 'retake.png'),
  camera: require(imageSrc + 'camera.png'),
  warning: require(imageSrc + 'warning.png'),
  checkbox: require(imageSrc + 'checkbox.png'),
  checkbox_checked: require(imageSrc + 'checkbox_checked.png'),
  tab_icon_car: require(imageSrc + 'tab_icon_car.png'),
  tab_icon_profile: require(imageSrc + 'tab_icon_profile.png'),
  tab_icon_trips: require(imageSrc + 'tab_icon_trips.png'),
  tab_icon_service: require(imageSrc + 'tab_icon_service.png'),
  promo_pic: require(imageSrc + 'promo_pic.png'),
};

export type TImageSource = keyof typeof ImageSource;
