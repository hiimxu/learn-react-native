import { Callback } from './../../../../screens/HomeScreen/screens/imagePickerTypes/index';
import * as CustomerActionsType from '../../types/customer';
import * as customerService from '../../../../Services/customerService';
import * as imageService from '../../../../Services/imageService';
import { Dispatch } from 'redux';

//Get list customer
export const getListCustomer = (token: string) => (dispatch: Dispatch) => {
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
    (customerId: number, token: string) => (dispatch: Dispatch) => {
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
    ({
        status,
        data,
        image,
        callback,
        token,
    }: {
        status: boolean;
        data: any;
        image: string | undefined;
        callback: () => void;
        token: string;
    }) =>
    (dispatch: any) => {
        const authToken = `Bearer ${token}`;
        dispatch(pendingEditCustomerInfomation());
        const fetchApi = async () => {
            if (status && image) {
                const imageInfo = await imageService.uploadImage(
                    image,
                    authToken,
                );
                if (imageInfo?.status === 200) {
                    const responseData = imageInfo?.body;
                    const arrayfile = JSON.parse(responseData);

                    const response =
                        await customerService.editCstomerInfomation({
                            data: data,
                            image: arrayfile[0]?.url,
                            token: authToken,
                        });
                    if (response?.status === 200) {
                        dispatch(
                            editCustomerInfomationSuccessfully(response.data),
                        );
                        callback();
                    } else {
                        dispatch(editCustomerInfomationFailed(response?.data));
                    }
                } else {
                    console.log(imageInfo);
                }
            } else {
                const response = await customerService.editCstomerInfomation({
                    data: data,
                    image: data?.image,
                    token: authToken,
                });
                if (response?.status === 200) {
                    dispatch(editCustomerInfomationSuccessfully(response.data));
                    callback();
                } else {
                    dispatch(editCustomerInfomationFailed(response?.data));
                }
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

//Add customer infomation
export const addCustomerInfomation =
    ({
        data,
        callback,
        token,
    }: {
        data: any;
        callback: () => void;
        token: string;
    }) =>
    (dispatch: Dispatch) => {
        const authToken = `Bearer ${token}`;
        dispatch(pendingAddCustomerInfomation());
        const fetchApi = async () => {
            if (data.image) {
                const imageInfo = await imageService.uploadImage(
                    data.image,
                    authToken,
                );
                if (imageInfo?.status === 200) {
                    const responseData = imageInfo?.body;
                    const arrayfile = JSON.parse(responseData);
                    const submitObj = {
                        name: data.name,
                        code: data.code,
                        image: arrayfile[0]?.url,
                        address: data.address,
                        phone: data.phone,
                        email: data.email,
                        createdBy: 'admin',
                    };

                    const response =
                        await customerService.addCustomerInfomation({
                            data: submitObj,
                            token: authToken,
                        });
                    if (response?.status === 200) {
                        dispatch(
                            addCustomerInfomationSuccessfully(response.data),
                        );
                        callback();
                    } else {
                        dispatch(addCustomerInfomationFailed(response?.data));
                    }
                } else {
                    console.log(imageInfo);
                }
            } else {
                const submitObj = {
                    name: data.name,
                    code: data.code,
                    image: 'https://static.vncommerce.com/avatar/90C74E26FB-default.jpg',
                    address: data.address,
                    phone: data.phone,
                    email: data.email,
                    createdBy: 'admin',
                };

                const response = await customerService.addCustomerInfomation({
                    data: submitObj,
                    token: authToken,
                });
                if (response?.status === 200) {
                    dispatch(addCustomerInfomationSuccessfully(response.data));
                    callback();
                } else {
                    dispatch(addCustomerInfomationFailed(response?.data));
                }
            }
        };
        fetchApi();
    };

const pendingAddCustomerInfomation = () => {
    return {
        type: CustomerActionsType.PENDING_EDIT_CUSTOMER,
        payload: null,
    };
};

const addCustomerInfomationSuccessfully = (data: any) => {
    return {
        type: CustomerActionsType.ADD_CUSTOMER_SUCCESSFULLY,
        payload: data,
    };
};

const addCustomerInfomationFailed = (errMess: any) => {
    return {
        type: CustomerActionsType.ADD_CUSTOMER_FAILED,
        payload: errMess,
    };
};

export const resetAddCustomerMess = () => {
    return {
        type: CustomerActionsType.RESET_ADD_CUSTOMER_MESSAGE,
        payload: null,
    };
};
