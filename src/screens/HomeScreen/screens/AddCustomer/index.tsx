import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, Input, LinearProgress } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation, useTheme } from '@react-navigation/native';

import styled from 'styled-components';
import SuccessDialog from '../../../../components/SuccessDialog';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../models/route';

import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import {
    addCustomerInfomation,
    getListCustomer,
    resetAddCustomerMess,
} from '../../../../redux/actions/creators/customer';
import { authSelector } from '../../../../redux/selectors/authSelector';
import { addCustomerSelector } from '../../../../redux/selectors/customerSelector';

const InputWrapper = styled(View)`
    padding: 20px 10px;
`;

const ImageWrapper = styled(View)`
    padding: 15px 0;
    display: flex;
    flex-direction: row;
`;

type FormData = {
    name: string;
    code: string;
    address: string;
    phoneNumber: string;
    email: string;
};

const styles = StyleSheet.create({
    tinyLogo: {
        width: 150,
        height: 200,
    },
});

export default function AddCustomer() {
    //State
    const [successDialog, setSuccessDialog] = React.useState<boolean>(false);
    const [image, setImage] = React.useState<string | undefined | null>(null);

    //Redux state
    const { account } = useSelector(authSelector);
    const { loading } = useSelector(addCustomerSelector);

    //Form data
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    //Redux hooks
    const dispatch = useDispatch();

    //Theme
    const { colors } = useTheme();

    //Navigation
    const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

    //Ref
    const lNameRef = React.createRef<TextInput>();
    const pNumberRef = React.createRef<TextInput>();
    const addressRef = React.createRef<TextInput>();

    //Submit
    const onSubmit = (data: FormData) => {
        const { name, code, address, phoneNumber, email } = data;
        const submitObj = {
            name: name,
            code: code,
            image: image,
            address: address,
            phone: phoneNumber,
            email: email,
        };

        const successCallback = () => {
            dispatch(resetAddCustomerMess());
            setSuccessDialog(true);
        };

        if (!loading) {
            dispatch(
                addCustomerInfomation({
                    data: submitObj,
                    callback: successCallback,
                    token: account.id_token,
                }),
            );
        }
    };

    //Handle Success dialog
    const handleCloseSuccessDialog = () => {
        dispatch(getListCustomer(account.id_token));
        setSuccessDialog(false);
        navigate('Home');
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.canceled) {
            const file = result?.assets[0]?.uri;
            setImage(file);
        }
    };
    const takePicture = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.canceled) {
            const file = result?.assets[0]?.uri;
            setImage(file);
        }
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <SuccessDialog
                    isVisible={successDialog}
                    content="Add new Customer successfully!"
                    onPress={handleCloseSuccessDialog}
                />
            </React.Fragment>
            <ScrollView>
                {loading && <LinearProgress />}
                <InputWrapper>
                    <ImageWrapper>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: image
                                    ? image
                                    : 'https://static.vncommerce.com/avatar/90C74E26FB-default.jpg',
                            }}
                        />

                        <Button
                            disabled={loading}
                            type="clear"
                            title={'Choose photo'}
                            onPress={pickImage}
                        />
                        <Button
                            disabled={loading}
                            type="clear"
                            title={'Take photo'}
                            onPress={takePicture}
                        />
                    </ImageWrapper>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                disabled={loading}
                                style={{ color: colors.text }}
                                returnKeyType="next"
                                onBlur={onBlur}
                                label="Name"
                                value={value}
                                onChangeText={onChange}
                                autoCompleteType={undefined}
                                errorStyle={{ color: 'red' }}
                                errorMessage={
                                    errors.name ? 'Name is required!' : ''
                                }
                                onSubmitEditing={() =>
                                    lNameRef.current?.focus()
                                }
                            />
                        )}
                        name="name"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                disabled={loading}
                                ref={lNameRef}
                                style={{ color: colors.text }}
                                returnKeyType="next"
                                onBlur={onBlur}
                                label="Code"
                                value={value}
                                onChangeText={onChange}
                                autoCompleteType={undefined}
                                errorStyle={{ color: 'red' }}
                                errorMessage={
                                    errors.code ? 'Code is required!' : ''
                                }
                                onSubmitEditing={() =>
                                    pNumberRef.current?.focus()
                                }
                            />
                        )}
                        name="code"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern:
                                /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/i,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                disabled={loading}
                                ref={pNumberRef}
                                style={{ color: colors.text }}
                                returnKeyType="next"
                                onBlur={onBlur}
                                label="Phone"
                                keyboardType="numeric"
                                value={value}
                                onChangeText={onChange}
                                autoCompleteType={undefined}
                                errorStyle={{ color: 'red' }}
                                errorMessage={
                                    errors.phoneNumber?.type === 'required'
                                        ? 'Phone is required!'
                                        : errors.phoneNumber?.type === 'pattern'
                                        ? 'Phome number wrong format. Try again!'
                                        : ''
                                }
                                onSubmitEditing={() =>
                                    addressRef.current?.focus()
                                }
                            />
                        )}
                        name="phoneNumber"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern:
                                /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z].{1,40}$/i,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                disabled={loading}
                                ref={addressRef}
                                style={{ color: colors.text }}
                                onBlur={onBlur}
                                keyboardType="email-address"
                                label="Email"
                                value={value}
                                onChangeText={onChange}
                                autoCompleteType={undefined}
                                errorStyle={{ color: 'red' }}
                                errorMessage={
                                    errors.email?.type === 'required'
                                        ? 'Email is required!'
                                        : errors.email?.type === 'pattern'
                                        ? 'Email wrong format. Try again!'
                                        : ''
                                }
                                onSubmitEditing={handleSubmit(onSubmit)}
                            />
                        )}
                        name="email"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                disabled={loading}
                                ref={addressRef}
                                style={{ color: colors.text }}
                                onBlur={onBlur}
                                label="Address"
                                value={value}
                                onChangeText={onChange}
                                autoCompleteType={undefined}
                                errorStyle={{ color: 'red' }}
                                errorMessage={
                                    errors.address ? 'Address is required!' : ''
                                }
                                onSubmitEditing={handleSubmit(onSubmit)}
                            />
                        )}
                        name="address"
                    />
                    <Button
                        disabled={loading}
                        title="Submit"
                        onPress={handleSubmit(onSubmit)}
                    />
                </InputWrapper>
            </ScrollView>
        </React.Fragment>
    );
}
