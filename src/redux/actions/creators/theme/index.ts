import * as ThemActionsType from '../../types/theme';

export const changeTheme =
    (themeDetail?: 'dark' | 'light' | null | undefined) => (dispatch: any) => {
        const theme = themeDetail;
        console.log(theme);

        if (theme === 'dark') {
            dispatch(setThemeDark(theme));
        } else if (theme === 'light') {
            dispatch(setThemeLight(theme));
        } else if (!theme) {
            dispatch(setThemeDevice(null));
        }
    };

const setThemeLight = (theme: string) => {
    return {
        type: ThemActionsType.LIGHT_THEME,
        payload: theme,
    };
};
const setThemeDark = (theme: string) => {
    return {
        type: ThemActionsType.DARK_THEME,
        payload: theme,
    };
};
const setThemeDevice = (theme: any) => {
    return {
        type: ThemActionsType.DEVICE_THEME,
        payload: theme,
    };
};
