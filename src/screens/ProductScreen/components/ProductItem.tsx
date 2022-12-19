import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { formatCurrency } from 'react-native-format-currency';
import Avatar from '../../../components/Avatar';
import { useTheme } from '@react-navigation/native';

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

const LabelText = styled(Text)`
    font-size: 16px;
    font-weight: 600;
`;

const PriceText = styled(Text)`
    font-size: 16px;
    font-weight: 600;
    color: #f15355;
`;

type Props = {
    product: {
        id: number;
        name: string;
        code: string;
        image: string;
        unit: string;
        price: number;
        createdDate: string;
        updatedDate: string;
        createdBy: string;
        updatedBy: string;
        status: number;
        reason: string;
        totalItems: number;
    };
    onPress?: () => void;
    onLongPress?: () => void;
};

export default function ProductItem({ product, onPress, onLongPress }: Props) {
    //Theme
    const { colors } = useTheme();
    return (
        <Wrapper
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
                backgroundColor: colors.card,
            }}
        >
            <Avatar uri={product.image} />
            <ContentWrapper>
                <Title style={{ color: colors.text }}>
                    {product.name} -{' '}
                    {product.status === 1 ? (
                        <StatusText>Accepted</StatusText>
                    ) : (
                        <StatusText>Reject</StatusText>
                    )}
                </Title>
                <PriceText>
                    {formatCurrency({ amount: product.price, code: 'VND' })[0]}
                </PriceText>
                <Text style={{ color: colors.text }}>
                    <LabelText>Code:</LabelText> {product.code}
                </Text>
                <Text style={{ color: colors.text }}>
                    <LabelText>Quantity:</LabelText>{' '}
                    <Text style={{ color: '#f15355' }}>
                        {product.totalItems}
                    </Text>
                </Text>
                <Text style={{ color: colors.text }}>
                    <LabelText>Reason: </LabelText>
                    {product.reason ? product.reason : 'No reason'}
                </Text>
                <Text
                    style={{
                        color: colors.text,
                        textDecorationLine: 'underline',
                        textDecorationColor: colors.text,
                    }}
                >
                    Create by {product.createdBy}
                </Text>
            </ContentWrapper>
        </Wrapper>
    );
}
