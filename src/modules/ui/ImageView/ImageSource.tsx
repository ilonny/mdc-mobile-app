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
  chevron_down: require(imageSrc + 'chevron-down.png'),
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
  vehicle_type_offroad: require(imageSrc + 'vehicle_type_offroad.png'),
  vehicle_type_cabrio: require(imageSrc + 'vehicle_type_cabrio.png'),
  vehicle_type_sport: require(imageSrc + 'vehicle_type_sport.png'),
  vehicle_type_coupe: require(imageSrc + 'vehicle_type_coupe.png'),
  vehicle_type_premium: require(imageSrc + 'vehicle_type_premium.png'),
  vehicle_type_bike: require(imageSrc + 'vehicle_type_bike.png'),
  heart: require(imageSrc + 'heart.png'),
  heart_filled: require(imageSrc + 'heart_filled.png'),
  next_button: require(imageSrc + 'next_button.png'),
  prev_button: require(imageSrc + 'prev_button.png'),
};

export type TImageSource = keyof typeof ImageSource;
