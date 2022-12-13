import axios from 'axios';

const request = axios.create({
    baseURL: 'http://103.147.35.60:8081/api/',
});

export const get = async (path: any, req?: any) => {
    const response = await request.get(path, req);
    return response;
};

export const post = async (path: any, req?: any, headers?: any) => {
    const response = await request.post(path, req, headers);
    return response;
};

export const put = async (path: any, req?: any, headers?: any) => {
    const response = await request.put(path, req, headers);
    return response;
};

export const update = async (path: any, req?: any, headers?: any) => {
    const response = await request.post(path, req, headers);
    return response;
};

export const del = async (path: any) => {
    const response = await request.delete(path);
    return response;
};

export default request;
