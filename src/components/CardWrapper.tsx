import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(TouchableOpacity)`
    flex: 1;
    padding: 15px;
    background-color: #bbbbbb;
    border-radius: 10px;
`;

type Props = {
    onPress?: () => void;
    children?: JSX.Element;
};

export default function CardWrapper({ children, onPress }: Props) {
    return <Wrapper onPress={onPress}>{children}</Wrapper>;
}
