import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Components
import Navbar from '../../components/Navbar';
import LoginScreen from '../LoginScreen';
import EditCustomer from '../HomeScreen/screens/EditCustomer';

//Type
import { RootStackParams } from '../../models/route';
import AddCustomer from '../HomeScreen/screens/AddCustomer';
import SettingScreen from '../SettingScreen';
import DarkmodeScreen from '../SettingScreen/screens/DarkmodeScreen';

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
                <Stack.Screen
                    name="Setting"
                    options={{
                        headerTitle: 'Setting & Privacy',
                    }}
                    component={SettingScreen}
                />
                <Stack.Screen
                    name="Darkmode"
                    options={{
                        headerTitle: 'Dark mode',
                    }}
                    component={DarkmodeScreen}
                />
            </Stack.Navigator>
        );
    } else {
        return <LoginScreen />;
    }
}
