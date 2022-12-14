import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styled from 'styled-components';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../../redux/actions/creators/theme';

const ButtomWrapper = styled(TouchableOpacity)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;
const ItemContentWrapper = styled(View)`
    flex: 1;
`;

const ButtonTitle = styled(Text)`
    font-size: 16px;
    font-weight: 700;
`;

export default function DarkmodeScreen() {
    //Theme
    const { colors } = useTheme();

    //Redux
    const { theme } = useSelector((state: any) => state.theme);

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <ButtomWrapper onPress={() => dispatch(changeTheme('dark'))}>
                <ItemContentWrapper>
                    <ButtonTitle style={{ color: colors.text }}>On</ButtonTitle>
                </ItemContentWrapper>
                <RadioButton
                    value="dark"
                    status={theme === 'dark' ? 'checked' : 'unchecked'}
                    color={colors.text}
                />
            </ButtomWrapper>
            <ButtomWrapper onPress={() => dispatch(changeTheme('light'))}>
                <ItemContentWrapper>
                    <ButtonTitle style={{ color: colors.text }}>
                        Off
                    </ButtonTitle>
                </ItemContentWrapper>

                <RadioButton
                    value="light"
                    status={theme === 'light' ? 'checked' : 'unchecked'}
                    color={colors.text}
                />
            </ButtomWrapper>
            <ButtomWrapper onPress={() => dispatch(changeTheme())}>
                <ItemContentWrapper>
                    <ButtonTitle style={{ color: colors.text }}>
                        Use system settings
                    </ButtonTitle>
                    <Text style={{ color: colors.text }}>
                        We'll adjust your appearence based on your device's
                        system settings.
                    </Text>
                </ItemContentWrapper>
                <RadioButton
                    value="device"
                    status={!theme ? 'checked' : 'unchecked'}
                    color={colors.text}
                />
            </ButtomWrapper>
        </React.Fragment>
    );
}
