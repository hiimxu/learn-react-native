import * as CustomerActionsType from '../../types/customer';
import * as customerService from '../../../../Services/customerService';

//Get list customer
export const getListCustomer = (token: string) => (dispatch: any) => {
    const authToken = `Bearer ${token}`;
    dispatch(pendingGetListCustomer());
    const fetchApi = async () => {
        const data = await customerService.getCustomerList(authToken);
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

//Get customer infomation
export const getCustomerInfomation =
    (customerId: number, token: string) => (dispatch: any) => {
        const authToken = `Bearer ${token}`;
        dispatch(pendingGetCustomerInfomation());
        const fetchApi = async () => {
            const response = await customerService.getCustomerInfomation(
                customerId,
                authToken,
            );
            if (response?.status === 200) {
                dispatch(getCustomerInfomationSuccessfully(response.data));
            } else {
                dispatch(
                    getCustomerInfomationFailed(
                        'Get customer infomation failed!',
                    ),
                );
            }
        };
        fetchApi();
    };

const pendingGetCustomerInfomation = () => {
    return {
        type: CustomerActionsType.PENDING_GET_CUSTOMER_INFOMATION,
        payload: null,
    };
};

const getCustomerInfomationSuccessfully = (data: any) => {
    return {
        type: CustomerActionsType.GET_CUSTOMER_INFOMATION_SUCCESSFULLY,
        payload: data,
    };
};

const getCustomerInfomationFailed = (errMess: string) => {
    return {
        type: CustomerActionsType.GET_CUSTOMER_INFOMATION_FAILED,
        payload: errMess,
    };
};

export const resetCustomerInfomation = () => {
    return {
        type: CustomerActionsType.RESET_CUSTOMER_INFOMATION,
        payload: null,
    };
};

//Edit customer infomation
export const editCustomerInfomation =
    (data: any, callback: () => void, token: string) => (dispatch: any) => {
        const authToken = `Bearer ${token}`;
        dispatch(pendingEditCustomerInfomation());
        const fetchApi = async () => {
            const response = await customerService.editCstomerInfomation(
                data,
                authToken,
            );
            if (response?.status === 200) {
                dispatch(editCustomerInfomationSuccessfully(response.data));
                callback();
            } else {
                dispatch(editCustomerInfomationFailed(response?.data));
            }
        };
        fetchApi();
    };

const pendingEditCustomerInfomation = () => {
    return {
        type: CustomerActionsType.PENDING_EDIT_CUSTOMER,
        payload: null,
    };
};
const editCustomerInfomationSuccessfully = (data: any) => {
    return {
        type: CustomerActionsType.EDIT_CUSTOMER_SUCCESSFULLY,
        payload: data,
    };
};
const editCustomerInfomationFailed = (errMess: any) => {
    return {
        type: CustomerActionsType.EDIT_CUSTOMER_FAILED,
        payload: errMess,
    };
};
export const resetEditCustomerMessage = () => {
    return {
        type: CustomerActionsType.RESET_EDIT_CUSTOMER_MESSAGE,
        payload: null,
    };
};
