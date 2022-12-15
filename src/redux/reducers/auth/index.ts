import * as AuthActionTypes from '../../actions/types/auth';

export const LoginAccount = (
    state = { loading: false, account: null, errMess: null },
    action: any,
) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_PENDING:
            return { ...state, loading: true, account: null, errMess: null };
        case AuthActionTypes.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                account: null,
                errMess: action.payload,
            };
        case AuthActionTypes.LOGIN_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                account: action.payload,
                errMess: null,
            };
        case AuthActionTypes.LOGOUT_SUCCESSFULLY:
            return { ...state, loading: false, account: null, errMess: null };
        default:
            return state;
    }
};
