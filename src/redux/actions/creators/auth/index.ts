import * as AuthActionTypes from '../../types/auth';
import * as authService from '../../../../Services/authService';

type LoginDetails = {
    username: string;
    password: string;
};

export const login = (loginDetails: LoginDetails) => (dispatch: any) => {
    const { username, password } = loginDetails;

    const submitObj = {
        username: username,
        password: password,
    };

    dispatch(loginPending());
    const fetchApi = async () => {
        const result = await authService.authenticate(submitObj);
        if (result?.status === 200) {
            dispatch(loginSuccessfully(result?.data));
        } else {
            dispatch(loginFailed('Wrong username or password. Try again!'));
        }
    };
    fetchApi();
};

const loginPending = () => {
    return {
        type: AuthActionTypes.LOGIN_PENDING,
    };
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
