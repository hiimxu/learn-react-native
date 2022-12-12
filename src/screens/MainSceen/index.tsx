import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Components
import Navbar from '../../components/Navbar';
import LoginScreen from '../LoginScreen';
import EditCustomer from '../HomeScreen/components/EditCustomer';

//Type
import { RootStackParams } from '../Models/route';
import AddCustomer from '../HomeScreen/components/AddCustomer';

const Stack = createNativeStackNavigator<RootStackParams>();

export default function MainScreen() {
    const { account } = useSelector((state: any) => state.loginAccount);
    if (account) {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    options={{ headerTitle: () => null, header: () => null }}
                    component={Navbar}
                />
                <Stack.Screen
                    name="EditCustomer"
                    options={{
                        headerTitle: 'Edit Customer',
                    }}
                    component={EditCustomer}
                />
                <Stack.Screen
                    name="AddCustomer"
                    options={{
                        headerTitle: 'Add Customer',
                    }}
                    component={AddCustomer}
                />
            </Stack.Navigator>
        );
    } else {
        return <LoginScreen />;
    }
}
