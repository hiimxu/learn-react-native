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
import { RootStackParams } from '../../models/route';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {
    getListCustomer,
    resetListCustomer,
} from '../../redux/actions/creators/customer';

const FillterWrapper = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
`;

export default function HomeScreen() {
    //Redux state
    const { data } = useSelector((state: any) => state.customerList);

    const { colors } = useTheme();

    const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(resetListCustomer());
        dispatch(getListCustomer());
        if (data) {
            console.log(data[0]?.name);
        }
    }, []);

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
