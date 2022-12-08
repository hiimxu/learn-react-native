import styled from 'styled-components';
import { View, Text } from 'react-native';

export const ScreenWrapper = styled(View)<{ backgroundColor: string }>`
    flex: 1;
    background-color: ${(props) => props.backgroundColor};
`;

export const Typography = styled(Text)<{ size?: number; color?: string }>`
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color};
`;
