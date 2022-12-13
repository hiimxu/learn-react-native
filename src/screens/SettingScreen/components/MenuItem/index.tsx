import { useTheme } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { changeTheme } from '../../../../redux/actions/creators/theme';

const Wrapper = styled(View)`
    display: flex;
    flex-direction: row;
    padding: 10px;
`;

const Title = styled(Text)`
    font-size: 15px;
    padding-left: 10px;
    font-weight: 500;
`;

type Props = {
    icon: string;
    title: string;
    onPress?: () => void;
};

export default function MenuItem({ icon, title, onPress }: Props) {
    //Theme
    const { colors } = useTheme();
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={onPress}>
            <Wrapper>
                <Icon
                    name={icon}
                    type="font-awesome"
                    color={colors.text}
                    tvParallaxProperties={undefined}
                />
                <Title style={{ color: colors.text }}>{title}</Title>
                <Button onPress={() => dispatch(changeTheme('light'))}>
                    set light
                </Button>
                <Button onPress={() => dispatch(changeTheme('dark'))}>
                    set dark
                </Button>

                <Button onPress={() => dispatch(changeTheme())}>
                    set default
                </Button>
            </Wrapper>
        </TouchableOpacity>
    );
}
