import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
    RouteProp,
    useNavigation,
    useRoute,
    useTheme,
} from '@react-navigation/native';
import { Input, Button } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { StackNavigationProp } from '@react-navigation/stack';

import styled from 'styled-components';

//Redux
import SuccessDialog from '../../../../components/SuccessDialog';
import { useDispatch, useSelector } from 'react-redux';
import { customerInfomationSelector } from '../../../../redux/selectors/customerSelector';
import {
    editCustomerInfomation,
    getCustomerInfomation,
    getListCustomer,
    resetEditCustomerMessage,
} from '../../../../redux/actions/creators/customer';
import { authSelector } from '../../../../redux/selectors/authSelector';

//types
import { RootStackParams } from '../../../../models/route';
import { Customer } from '../../../../models/customer';

import * as ImagePicker from 'expo-image-picker';

const Wrapper = styled(View)`
    padding: 20px 10px;
`;

const ImageWrapper = styled(View)`
    padding: 15px 0;
    display: flex;
    flex-direction: row;
`;

const TextCustomerInfo = styled(Text)`
    font-size: 25px;
    font-weight: 500;
    text-align: center;
`;

const styles = StyleSheet.create({
    tinyLogo: {
        width: 150,
        height: 200,
    },
});

type ParamList = {
    EditCustomer: {
        userId: number;
        name: string;
    };
};

export default function EditCustomer() {
    //State
    const [status, setStatus] = React.useState<boolean>(false);
    const [image, setImage] = React.useState<string | undefined>(undefined);

    //Redux state
    const { account } = useSelector(authSelector);
    const { loading, data } = useSelector(customerInfomationSelector);

    //Redux hooks
    const dispatch = useDispatch();

    //Dialog
    const [successDialog, setSuccessDialog] = React.useState<boolean>(false);

    //Get params
    const { params } = useRoute<RouteProp<ParamList, 'EditCustomer'>>();
    const { userId, name } = params;

    //Navigation
    const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

    //Fetch api
    React.useEffect(() => {
        dispatch(getCustomerInfomation(userId, account.id_token));
    }, [userId]);

    //Set default value
    React.useEffect(() => {
        reset(data);
        setImage(data?.image);
    }, [data]);

    //Form data
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Customer>();

    //Theme
    const { colors } = useTheme();

    //Ref
    const lNameRef = React.createRef<TextInput>();
    const pNumberRef = React.createRef<TextInput>();
    const addressRef = React.createRef<TextInput>();

    //Edit customer
    const onSubmit = (data: Customer) => {
        const successCallback = () => {
            dispatch(resetEditCustomerMessage());
            setSuccessDialog(true);
        };
        dispatch(
            editCustomerInfomation({
                status: status,
                data: data,
                image: image,
                callback: successCallback,
                token: account.id_token,
            }),
        );
    };

    //Handle Dialog
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
            setStatus(true);
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
            setStatus(true);
            const file = result?.assets[0]?.uri;
            setImage(file);
        }
    };

    return (
        <React.Fragment>
            <React.Fragment>
                {/* Dialog */}
                <SuccessDialog
                    isVisible={successDialog}
                    content={`Edit customer ${name} successfully!`}
                    onPress={handleCloseSuccessDialog}
                />
            </React.Fragment>
            {name && (
                <TextCustomerInfo style={{ color: colors.text }}>
                    {name}
                </TextCustomerInfo>
            )}
            {loading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <ScrollView>
                    <Wrapper>
                        <ImageWrapper>
                            {image && (
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: image,
                                    }}
                                />
                            )}
                            <Button
                                type="clear"
                                title={'Choose photo'}
                                onPress={pickImage}
                            />
                            <Button
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
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <Input
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
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <Input
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
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <Input
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
                                            : errors.phoneNumber?.type ===
                                              'pattern'
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
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <Input
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
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <Input
                                    ref={addressRef}
                                    style={{ color: colors.text }}
                                    onBlur={onBlur}
                                    label="Address"
                                    value={value}
                                    onChangeText={onChange}
                                    autoCompleteType={undefined}
                                    errorStyle={{ color: 'red' }}
                                    errorMessage={
                                        errors.address
                                            ? 'Address is required!'
                                            : ''
                                    }
                                    onSubmitEditing={handleSubmit(onSubmit)}
                                />
                            )}
                            name="address"
                        />
                        <Button title="Edit" onPress={handleSubmit(onSubmit)} />
                    </Wrapper>
                </ScrollView>
            )}
        </React.Fragment>
    );
}
