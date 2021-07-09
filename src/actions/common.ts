import { I18nManager } from 'react-native';
import localStrings from '../local/main';
import { saveAppLang, getAppLang } from './main';
import RNRestart from 'react-native-restart';

import {

    CHANGE_APP_THEME

} from './types';

export function changeTheme(theme) {
    return async (dispatch) => {
        dispatch({
            type: CHANGE_APP_THEME,
            appTheme: theme
        })
    }
}

export async function changeLang(lang) {
    if (lang == localStrings.getLanguage()) return;
    try {
        await saveAppLang(lang);
        localStrings.setLanguage(lang);
        const rtl = lang == 'ar' ? true : false
        I18nManager.forceRTL(rtl)
        RNRestart.Restart();
    } catch (error) {
        console.log(error)
    }
}

export async function setInitAppLang() {
    try {
        const lang = await getAppLang();
        localStrings.setLanguage(lang + "");
    } catch (error) {
        console.log(error)
    }
}