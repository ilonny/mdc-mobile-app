import { Alert } from 'react-native';
import { reset } from '../../../navigation';
import { Storage } from '../../asyncStorage';
import { throttleDecorator } from './decorators';

class ErrorHandler {
  canAlert = true;

  // @throttleDecorator(200)
  async handleRequestError(errorBody: any) {
    if (this.canAlert) {
      this.canAlert = false;
      setTimeout(() => {
        this.canAlert = true;
      }, 1000);
      if (errorBody?.message?.includes('Unauthenticated')) {
        Alert.alert('Authorize error, please login again');
        await Storage.clearToken();
        reset('LoginScreen');
        return;
      }
      if (errorBody?.message) {
        Alert.alert(`${errorBody?.message}`);
        return;
      }
      Alert.alert(`${errorBody}`);
      return;
    }
  }
}

export const ErrorHandlerInstance = new ErrorHandler();
