import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled(View)`
    display: flex;
    flex-direction: row;
    padding: 10px;
`;

const Title = styled(Text)`
    font-size: 17px;
    padding-left: 10px;
    font-weight: 600;
`;

type Props = {
    icon: string;
    title: string;
    onPress?: () => void;
};

export default function MenuItem({ icon, title, onPress }: Props) {
    //Theme
    const { colors } = useTheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <Wrapper>
                <Icon
                    name={icon}
                    type="font-awesome"
                    color={colors.text}
                    tvParallaxProperties={undefined}
                    size={26}
                />
                <Title style={{ color: colors.text }}>{title}</Title>
            </Wrapper>
        </TouchableOpacity>
    );
}
