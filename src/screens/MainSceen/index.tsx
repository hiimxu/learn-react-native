import React from 'react';
import { useSelector } from 'react-redux';

//Components
import Navbar from '../../components/Navbar';
import LoginScreen from '../LoginScreen';

export default function MainScreen() {
    const { account } = useSelector((state: any) => state.loginAccount);
    if (account) {
        return <Navbar />;
    } else {
        return <LoginScreen />;
    }
}
