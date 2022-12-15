import * as CustomerActionsType from '../../actions/types/customer';

type ActionType = {
    type: string;
    payload: any;
};

export const CustomerList = (
    state = { loading: false, data: null, errMess: null },
    action: ActionType,
) => {
    switch (action.type) {
        case CustomerActionsType.GET_LIST_CUSTOMER_PENDING:
            return { ...state, loading: true, data: null, errMess: null };
        case CustomerActionsType.GET_LIST_CUSTOMER_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errMess: null,
            };
        case CustomerActionsType.GET_LIST_CUSTOMER_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                errMess: action.payload,
            };
        case CustomerActionsType.RESET_LIST_CUSTOMER:
            return { ...state, loading: false, data: null, errMess: null };
        default:
            return state;
    }
};

export const CustomerInfomation = (
    state = { loading: false, data: null, errMess: null },
    action: ActionType,
) => {
    switch (action.type) {
        case CustomerActionsType.PENDING_GET_CUSTOMER_INFOMATION:
            return { ...state, loading: true, data: null, errMess: null };
        case CustomerActionsType.GET_CUSTOMER_INFOMATION_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errMess: null,
            };
        case CustomerActionsType.GET_CUSTOMER_INFOMATION_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                errMess: action.payload,
            };
        case CustomerActionsType.RESET_CUSTOMER_INFOMATION:
            return {
                ...state,
                loading: false,
                data: null,
                errMess: null,
            };
        default:
            return state;
    }
};

export const EditCustomer = (
    state = { loading: false, data: null, errMess: null },
    action: ActionType,
) => {
    switch (action.type) {
        case CustomerActionsType.PENDING_EDIT_CUSTOMER:
            return { ...state, loading: true, data: null, errMess: null };
        case CustomerActionsType.EDIT_CUSTOMER_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errMess: null,
            };
        case CustomerActionsType.EDIT_CUSTOMER_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                errMess: action.payload,
            };
        default:
            return state;
    }
};
