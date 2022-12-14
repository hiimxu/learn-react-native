import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { HStack, Box } from '@react-native-material/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useTheme } from '@react-navigation/native';

//Styles
import styled from 'styled-components';

//Redux
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/creators/auth';

//Components
import ButtonCustom from '../../components/ButtonCustom';
import MenuButton from './components/MenuButton';
import { RootStackParams } from '../../models/route';

const ButtonWrapper = styled(HStack)`
    padding: 10px;
`;

const ItemWrapper = styled(Box)`
    flex: 1;
`;

export default function ProfileScreen() {
    //Hooks
    const { colors } = useTheme();

    //Redux
    const dispatch = useDispatch();

    //Navigation
    const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

    //Handle
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <View>
            <ScrollView>
                <ButtonWrapper spacing={10}>
                    <ItemWrapper>
                        <MenuButton
                            icon="settings"
                            title="Settings"
                            onPress={() => navigate('Setting')}
                        />
                    </ItemWrapper>
                    <ItemWrapper>
                        <MenuButton icon="settings" title="Settings" />
                    </ItemWrapper>
                </ButtonWrapper>
                <ButtonCustom
                    iconName="logout"
                    title="Sign Out"
                    onPress={handleLogout}
                />
            </ScrollView>
        </View>
    );
}
