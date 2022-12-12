import React from 'react';
import { View, ScrollView } from 'react-native';
import CustomerItem from './components/CustomerItem';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Button } from '@rneui/themed';

import styled from 'styled-components';

//data mockup
import { CUSTOMERS_LIST } from '../../shared/data/customers';
import { Icon } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../Models/route';

const FillterWrapper = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
`;

export default function HomeScreen() {
    const { colors } = useTheme();

    const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

    return (
        <React.Fragment>
            <FillterWrapper style={{ backgroundColor: colors.card }}>
                <Button
                    type="outline"
                    buttonStyle={{
                        borderColor: colors.text,
                        borderWidth: 2,
                        borderRadius: 5,
                    }}
                >
                    <Icon
                        name="search"
                        color={colors.text}
                        tvParallaxProperties={undefined}
                    />
                </Button>
                <Button
                    color={colors.primary}
                    buttonStyle={{
                        borderRadius: 5,
                    }}
                    onPress={() => navigate('AddCustomer')}
                >
                    <Icon
                        name="add"
                        color="white"
                        tvParallaxProperties={undefined}
                    />
                </Button>
            </FillterWrapper>
            <ScrollView>
                {CUSTOMERS_LIST?.map((customer) => (
                    <CustomerItem key={customer.id} customer={customer} />
                ))}
            </ScrollView>
        </React.Fragment>
    );
}
