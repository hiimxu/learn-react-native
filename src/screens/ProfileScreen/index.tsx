import React from 'react';
import { View, Text } from 'react-native';

//Styles
import { useTheme } from '@react-navigation/native';

//Redux
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/creators/auth';
import ButtonCustom from '../../components/ButtonCustom';

export default function ProfileScreen() {
    //Hooks
    const { colors } = useTheme();

    //Redux
    const dispatch = useDispatch();

    //Handle
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <View>
            <Text style={{ color: colors.text }}>Profile Screen</Text>
            <ButtonCustom
                type="clear"
                iconName="home"
                title="Log out"
                onPress={handleLogout}
            />
        </View>
    );
}
