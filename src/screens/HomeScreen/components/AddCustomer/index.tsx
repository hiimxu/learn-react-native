import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from 'react-hook-form';
import { useTheme } from '@react-navigation/native';

import styled from 'styled-components';

const InputWrapper = styled(View)`
    padding: 20px 10px;
`;

type FormData = {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
};

export default function AddCustomer() {
    //Form data
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    //Theme
    const { colors } = useTheme();

    //Ref
    const lNameRef = React.createRef<TextInput>();
    const pNumberRef = React.createRef<TextInput>();
    const addressRef = React.createRef<TextInput>();

    //Submit
    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <React.Fragment>
            <ScrollView>
                <InputWrapper>
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
                    <Button title="Submit" onPress={handleSubmit(onSubmit)} />
                </InputWrapper>
            </ScrollView>
        </React.Fragment>
    );
}
