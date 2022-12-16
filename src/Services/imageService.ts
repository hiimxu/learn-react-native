import { AxiosError } from 'axios';
import * as request from '../utils/httpRequest';
import * as FileSystem from 'expo-file-system';

export const uploadImage = async (data: string, token: string) => {
    const submitObj = new FormData();
    const uriParts = data.split('.');
    const fileType = uriParts[uriParts.length - 1];

    const fileTypePart = uriParts[2].split('/');
    const fileName = fileTypePart[fileTypePart.length - 1];

    const file: any = {
        uri: data,
        name: fileName,
        type: fileType,
    };

    submitObj.append('image', file);

    // try {
    //     const response = await request.post(`uploadImage`, submitObj, {
    //         headers: {
    //             Authorization: token,
    //             'Content-Type': 'multipart/form-data; boundary=something',
    //         },
    //     });
    //     return response;
    // } catch (error) {
    //     const err = error as AxiosError;
    //     console.log(err.response);
    //     return err.response;
    // }

    const response = await FileSystem.uploadAsync(
        'http://103.147.35.60:8081/api/uploadImage',
        data, // uri of the image
        {
            httpMethod: 'POST',
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
            fieldName: 'image',
        },
    );
    return response;
};
