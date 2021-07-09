import AsyncStorage from '@react-native-async-storage/async-storage';
import { storageKeys } from '../modules/values/constants';

export async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function getData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function saveAppLang(lang) {
  try {
    await saveData(storageKeys.appLang,lang);
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function getAppLang() {
  try {
    const appLang = await getData(storageKeys.appLang);
    return appLang;
  } catch (e) {
    console.log(e);
    return e;
  }
}