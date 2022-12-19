import { AxiosError } from 'axios';
import * as request from '../utils/httpRequest';

export const getProductList = async (token: string, params?: any) => {
    try {
        const response = await request.get('products', {
            headers: {
                Authorization: token,
            },
            params: params,
        });
        return response;
    } catch (error) {
        const err = error as AxiosError;
        console.log(err.response);
        return err.response;
    }
};
