import * as ThemeActionsType from '../../actions/types/theme';

export const Theme = (state = { theme: 'light' }, action: any) => {
    switch (action.type) {
        case ThemeActionsType.LIGHT_THEME:
            return { ...state, theme: action.payload };
        case ThemeActionsType.DARK_THEME:
            return { ...state, theme: action.payload };
        case ThemeActionsType.DEVICE_THEME:
            return { ...state, theme: null };
        default:
            return state;
    }
};
