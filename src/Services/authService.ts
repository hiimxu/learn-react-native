import { AxiosError } from 'axios';
import * as request from '../utils/httpRequest';

type LoginDetails = {
    username: string;
    password: string;
};

export const authenticate = async (loginDetail: LoginDetails) => {
    try {
        const response = await request.post('authenticate', loginDetail);
        return response;
    } catch (error) {
        const err = error as AxiosError;
        console.log(err.response);
        return err.response;
    }
};
