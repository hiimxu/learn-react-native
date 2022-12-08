import * as AuthActionTypes from '../../types/auth';

type LoginDetails = {
    username: string;
    password: string;
};

const ACCOUNT_DETAIL = {
    username_data: 'admin',
    password_data: 'admin',
};

export const login = (loginDetails: LoginDetails) => (dispatch: any) => {
    const { username, password } = loginDetails;
    if (
        username === ACCOUNT_DETAIL.username_data &&
        password === ACCOUNT_DETAIL.password_data
    ) {
        dispatch(loginSuccessfully(username));
    } else {
        dispatch(loginFailed('Login failed!'));
    }
};

const loginSuccessfully = (account: string) => {
    return {
        type: AuthActionTypes.LOGIN_SUCCESSFULLY,
        payload: account,
    };
};

const loginFailed = (errMess: string) => {
    return {
        type: AuthActionTypes.LOGIN_FAILED,
        payload: errMess,
    };
};

export const logout = () => (dispatch: any) => {
    dispatch(logoutSuccessfully());
};

const logoutSuccessfully = (message?: string) => {
    return {
        type: AuthActionTypes.LOGOUT_SUCCESSFULLY,
        payload: message,
    };
};
