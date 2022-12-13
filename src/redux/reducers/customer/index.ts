import * as CustomerActionsType from '../../actions/types/customer';

export const CustomerList = (
    state = { loading: false, data: null, errMess: null },
    action: any,
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
