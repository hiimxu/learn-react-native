import React from 'react';
import { View, Text, ScrollView } from 'react-native';
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

const Wrapper = styled(View)`
    padding: 20px 10px;
`;

const TextCustomerInfo = styled(Text)`
    font-size: 25px;
    font-weight: 500;
    text-align: center;
`;

type ParamList = {
    EditCustomer: {
        userId: number;
        name: string;
    };
};

export default function EditCustomer() {
    //State
    const [filePath, setFilePath] = React.useState<any>({});

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
            editCustomerInfomation(data, successCallback, account.id_token),
        );
    };

    //Handle Dialog
    const handleCloseSuccessDialog = () => {
        dispatch(getListCustomer(account.id_token));
        setSuccessDialog(false);
        navigate('Home');
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
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <Input
                                    ref={addressRef}
                                    style={{ color: colors.text }}
                                    onBlur={onBlur}
                                    label="Email"
                                    value={value}
                                    onChangeText={onChange}
                                    autoCompleteType={undefined}
                                    errorStyle={{ color: 'red' }}
                                    errorMessage={
                                        errors.email ? 'Email is required!' : ''
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
