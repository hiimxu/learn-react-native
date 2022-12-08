import React from 'react';
import { View, Text, ScrollView } from 'react-native';

//Styles
import { useTheme } from '@react-navigation/native';

//Redux
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/creators/auth';

//Components
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
            <ScrollView>
                <Text style={{ color: colors.text }}>Profile Screen</Text>
                <ButtonCustom
                    type="clear"
                    iconName="logout"
                    title="Log out"
                    onPress={handleLogout}
                />
            </ScrollView>
        </View>
    );
}
