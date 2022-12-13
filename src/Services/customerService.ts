import * as request from '../utils/httpRequest';
export const getCustomerList = async () => {
    try {
        const response = await request.get('customers');
        return response;
    } catch (error) {
        console.log(error);
    }
};
