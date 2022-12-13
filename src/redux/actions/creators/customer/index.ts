import * as CustomerActionsType from '../../types/customer';
import { getCustomerList } from '../../../../Services/customerService';

export const getListCustomer = () => (dispatch: any) => {
    dispatch(pendingGetListCustomer());
    const fetchApi = async () => {
        const data = await getCustomerList();
        if (data?.status === 200) {
            dispatch(getListCustomerSuccessfully(data.data));
        } else {
            dispatch(getListCustomerFailed('Get list customer failed!'));
        }
    };
    fetchApi();
};

const pendingGetListCustomer = () => {
    return {
        type: CustomerActionsType.GET_LIST_CUSTOMER_PENDING,
        payload: null,
    };
};

const getListCustomerSuccessfully = (data: any) => {
    return {
        type: CustomerActionsType.GET_LIST_CUSTOMER_SUCCESSFULLY,
        payload: data,
    };
};

const getListCustomerFailed = (errMess: string) => {
    return {
        type: CustomerActionsType.GET_LIST_CUSTOMER_FAILED,
        payload: errMess,
    };
};

export const resetListCustomer = () => {
    return {
        type: CustomerActionsType.RESET_LIST_CUSTOMER,
        payload: null,
    };
};
