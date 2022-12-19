import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Avatar from '../../../components/Avatar';

const Wrapper = styled(TouchableOpacity)`
    display: flex;
    flex-direction: row;
    padding: 10px;
`;

const ContentWrapper = styled(View)`
    flex: 1;
    margin-left: 20px;
`;

const Title = styled(Text)`
    font-size: 18px;
    font-weight: 700;
`;

const StatusText = styled(Text)`
    font-size: 15px;
    color: green;
`;

const PriceText = styled(Text)`
    font-size: 16px;
    font-weight: 600;
`;

type Props = {
    product: {
        id: number;
        name: string;
        code: string;
        image: string;
        unit: string;
        price: string;
        createdDate: string;
        updatedDate: string;
        createdBy: string;
        updatedBy: string;
        status: number;
        reason: string;
    };
    onPress?: () => void;
    onLongPress?: () => void;
};

export default function ProductItem({ product, onPress, onLongPress }: Props) {
    return (
        <Wrapper onPress={onPress} onLongPress={onLongPress}>
            <Avatar uri={product.image} />
            <ContentWrapper>
                <Title>
                    {product.name} -{' '}
                    {product.status === 1 ? (
                        <StatusText>Accepted</StatusText>
                    ) : (
                        <StatusText>Reject</StatusText>
                    )}
                </Title>
                <PriceText>{product.price}</PriceText>
                <Text>{product.code}</Text>
                <Text>{product.reason}</Text>
                <Text>Create by {product.createdBy}</Text>
            </ContentWrapper>
        </Wrapper>
    );
}
