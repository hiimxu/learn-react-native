import * as ProductActionsType from '../../types/product';
import * as productService from '../../../../Services/productService';
import { Dispatch } from 'redux';

type Params = {
    strFromDate: string;
    strToDate: string;
    status: number;
    name: string;
};

export const getListProduct =
    (token: string, params?: Params) => (dispatch: Dispatch) => {
        const authToken = `Bearer ${token}`;
        dispatch(pendingGetListProduct());
        const fetchApi = async () => {
            const response = await productService.getProductList(
                authToken,
                params,
            );
            if (response?.status === 200) {
                dispatch(getListProductSuccessfully(response.data));
            } else {
                dispatch(getListProductFailed(response?.data));
            }
        };
        fetchApi();
    };

const pendingGetListProduct = () => {
    return {
        type: ProductActionsType.PENDING_GET_LIST_PRODUCT,
        payload: null,
    };
};

const getListProductSuccessfully = (data: any) => {
    return {
        type: ProductActionsType.GET_LIST_PRODUCT_SUCCESSFULLY,
        payload: data,
    };
};

const getListProductFailed = (errMess: any) => {
    return {
        type: ProductActionsType.GET_LIST_PRODUCT_FAILED,
        payload: errMess,
    };
};

export const resetListProduct = () => {
    return {
        type: ProductActionsType.RESET_LIST_PRODUCT,
        payload: null,
    };
};
