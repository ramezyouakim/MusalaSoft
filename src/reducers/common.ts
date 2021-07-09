import {
    CHANGE_APP_THEME
} from '../actions/types';

const INIT_STATE = {
    appTheme: "light"
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case CHANGE_APP_THEME:
            return { ...state, appTheme: action.appTheme }
        default:
            return state;
    }
}
