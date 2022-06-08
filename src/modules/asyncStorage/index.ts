import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  setItem: async (key: string, value: any) => {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    AsyncStorage.setItem(key, value);
  },
  getItem: async (key: string) => {
    let res = await AsyncStorage.getItem(key);
    if (res) {
      try {
        res = JSON.parse(res);
      } catch (err) {}
    }
    return res;
  },
  removeItem: async (key: string) => {
    return await AsyncStorage.removeItem(key);
  },
  clear: async () => {
    return await AsyncStorage.clear();
  },
};
