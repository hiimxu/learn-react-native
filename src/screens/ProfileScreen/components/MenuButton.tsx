import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { Icon } from 'react-native-elements';

import CardWrapper from '../../../components/CardWrapper';

const ContentWrapper = styled(View)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Title = styled(Text)`
    color: #333;
    font-size: 15px;
    font-weight: 500;
`;

type Props = {
    icon?: string;
    title?: string;
    onPress?: () => void;
};

export default function MenuButton({ icon, title, onPress }: Props) {
    return (
        <CardWrapper onPress={onPress}>
            <ContentWrapper>
                {icon && (
                    <Text>
                        <Icon name={icon} tvParallaxProperties={undefined} />
                    </Text>
                )}
                <Title>{title}</Title>
            </ContentWrapper>
        </CardWrapper>
    );
}
