import React from 'react';
import { View, Text } from 'react-native';
import { Skeleton } from '@rneui/themed';
import { VStack } from '@react-native-material/core';
import styled from 'styled-components';

const Wrapper = styled(VStack)`
    padding: 10px;
`;

const LoadingListItem = styled(Skeleton)`
    height: 70px;
    border-radius: 10px;
`;

export function CustomerLoading() {
    return (
        <Wrapper spacing={20}>
            <LoadingListItem />
            <LoadingListItem />
            <LoadingListItem />
            <LoadingListItem />
            <LoadingListItem />
            <LoadingListItem />
            <LoadingListItem />
            <LoadingListItem />
        </Wrapper>
    );
}
