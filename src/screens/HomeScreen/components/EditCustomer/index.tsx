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

import styled from 'styled-components';

//data mockup
import { CUSTOMERS_LIST } from '../../../../shared/data/customers';
import SuccessDialog from '../../../../components/SuccessDialog';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../models/route';

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

type Customer = {
    id: number;
    lastName: string;
    firstName: string;
    phone: string;
    address: string;
};

export default function EditCustomer() {
    //Dialog
    const [successDialog, setSuccessDialog] = React.useState<boolean>(false);

    //Get params
    const { params } = useRoute<RouteProp<ParamList, 'EditCustomer'>>();
    const { userId, name } = params;

    const getCustomerData = (id: number) => {
        const result = CUSTOMERS_LIST.find((user: Customer) => user.id === id);
        return result;
    };

    //Navigation
    const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

    //Form data
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Customer>({
        defaultValues: getCustomerData(userId),
    });

    //Theme
    const { colors } = useTheme();

    //Ref
    const lNameRef = React.createRef<TextInput>();
    const pNumberRef = React.createRef<TextInput>();
    const addressRef = React.createRef<TextInput>();

    //Edit customer
    const onSubmit = (data: Customer) => {
        console.log(data);
        setSuccessDialog(true);
    };

    //Handle Dialog
    const handleCloseSuccessDialog = () => {
        setSuccessDialog(false);
        navigate('Home');
    };

    return (
        <React.Fragment>
            <React.Fragment>
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
            <ScrollView>
                <Wrapper>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                style={{ color: colors.text }}
                                returnKeyType="next"
                                onBlur={onBlur}
                                label="First name"
                                value={value}
                                onChangeText={onChange}
                                autoCompleteType={undefined}
                                errorStyle={{ color: 'red' }}
                                errorMessage={
                                    errors.firstName
                                        ? 'First name is required!'
                                        : ''
                                }
                                onSubmitEditing={() =>
                                    lNameRef.current?.focus()
                                }
                            />
                        )}
                        name="firstName"
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                ref={lNameRef}
                                style={{ color: colors.text }}
                                returnKeyType="next"
                                onBlur={onBlur}
                                label="Last name"
                                value={value}
                                onChangeText={onChange}
                                autoCompleteType={undefined}
                                errorStyle={{ color: 'red' }}
                                errorMessage={
                                    errors.lastName
                                        ? 'Last name is required!'
                                        : ''
                                }
                                onSubmitEditing={() =>
                                    pNumberRef.current?.focus()
                                }
                            />
                        )}
                        name="lastName"
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
                                    errors.phone?.type === 'required'
                                        ? 'Phone is required!'
                                        : errors.phone?.type === 'pattern'
                                        ? 'Phome number wrong format. Try again!'
                                        : ''
                                }
                                onSubmitEditing={() =>
                                    addressRef.current?.focus()
                                }
                            />
                        )}
                        name="phone"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
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
                                    errors.address ? 'Address is required!' : ''
                                }
                                onSubmitEditing={handleSubmit(onSubmit)}
                            />
                        )}
                        name="address"
                    />
                    <Button title="Edit" onPress={handleSubmit(onSubmit)} />
                </Wrapper>
            </ScrollView>
        </React.Fragment>
    );
}
