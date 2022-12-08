import React from 'react';
import { View, ScrollView } from 'react-native';
import CustomerItem from './components/CustomerItem';
import { useTheme } from '@react-navigation/native';

import styled from 'styled-components';

const CUSTOMERS_LIST = [
    {
        id: 1,
        lastName: 'Nguyen',
        firstName: 'A',
        phone: '0912345678',
        address: 'Hanoi',
    },
    {
        id: 2,
        lastName: 'Nguyen',
        firstName: 'B',
        phone: '0912345678',
        address: 'Hanoi',
    },
    {
        id: 3,
        lastName: 'Nguyen',
        firstName: 'C',
        phone: '0912345678',
        address: 'Hanoi',
    },
    {
        id: 4,
        lastName: 'Nguyen',
        firstName: 'D',
        phone: '0912345678',
        address: 'Hanoi',
    },
];

export default function HomeScreen() {
    return (
        <View>
            <ScrollView>
                {CUSTOMERS_LIST?.map((customer) => (
                    <CustomerItem key={customer.id} customer={customer} />
                ))}
            </ScrollView>
        </View>
    );
}
