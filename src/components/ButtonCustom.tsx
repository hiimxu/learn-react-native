import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const ButtonWrapper = styled(TouchableOpacity)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 20px;
    margin: 10px;
    border-radius: 10px;
    background-color: gray;
`;

const Title = styled(Text)`
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
    color: white;
`;

type Props = {
    title: string;
    iconName?: string;
    onPress?: () => void;
};

function ButtonCustom({ title, iconName, onPress }: Props) {
    return (
        <ButtonWrapper onPress={onPress}>
            <Icon
                tvParallaxProperties={undefined}
                name={iconName ? iconName : ''}
                color="white"
            />
            <Title>{title}</Title>
        </ButtonWrapper>
    );
}
export default ButtonCustom;
