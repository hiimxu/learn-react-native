import { AxiosError } from 'axios';
import * as request from '../utils/httpRequest';

export const getCustomerList = async (token: string) => {
    try {
        const response = await request.get('customers', {
            headers: {
                Authorization: token,
            },
        });
        return response;
    } catch (error) {
        const err = error as AxiosError;
        console.log(err.response);
        return err.response;
    }
};

export const getCustomerInfomation = async (id: number, token: string) => {
    try {
        const response = await request.get(`customers/${id}`, {
            headers: {
                Authorization: token,
            },
        });
        return response;
    } catch (error) {
        const err = error as AxiosError;
        console.log(err.response);
        return err.response;
    }
};

export const editCstomerInfomation = async ({
    data,
    image,
    token,
}: {
    data: any;
    image: any;
    token: string;
}) => {
    const { id, name, code, address, phoneNumber, email } = data;
    const submitObj = {
        id: id,
        name: name,
        code: code,
        image: image,
        address: address,
        phoneNumber: phoneNumber,
        email: email,
    };

    try {
        const response = await request.put(`customers/${id}`, submitObj, {
            headers: {
                Authorization: token,
            },
        });
        return response;
    } catch (error) {
        const err = error as AxiosError;
        console.log(err.response);
        return err.response;
    }
};

export const addCustomerInfomation = async ({
    data,
    token,
}: {
    data: any;
    token: string;
}) => {
    const { name, code, image, address, phone, email, createdBy } = data;
    const submitObj = {
        name: name,
        code: code,
        image: image,
        address: address,
        phoneNumber: phone,
        email: email,
        createdBy: createdBy,
    };
    try {
        const response = await request.post(`customers`, submitObj, {
            headers: {
                Authorization: token,
            },
        });
        return response;
    } catch (error) {
        const err = error as AxiosError;
        console.log(err.response);
        return err.response;
    }
};

export const deleteCustomerInfomation = async (
    id: number | undefined,
    token: string,
) => {
    try {
        const response = await request.del(`customers/${id}`, {
            headers: {
                Authorization: token,
            },
        });
        return response;
    } catch (error) {
        const err = error as AxiosError;
        console.log(err.response);
        return err.response;
    }
};
