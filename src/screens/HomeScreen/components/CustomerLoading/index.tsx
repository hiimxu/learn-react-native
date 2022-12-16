import React from 'react';
import { View, Text } from 'react-native';
import { Skeleton } from '@rneui/themed';
import { Box, HStack, VStack } from '@react-native-material/core';
import styled from 'styled-components';

const Wrapper = styled(VStack)`
    padding: 10px;
`;
const LoadingListItemName = styled(Skeleton)`
    width: 200px;
    height: 20px;
    border-radius: 10px;
`;

const LoadingListItemInfo = styled(Skeleton)`
    height: 20px;
    border-radius: 10px;
`;

export function CustomerLoading() {
    return (
        <Wrapper spacing={25}>
            <HStack spacing={10}>
                <Skeleton circle width={50} height={50} />
                <Box style={{ flex: 1 }}>
                    <VStack spacing={10}>
                        <LoadingListItemName />
                        <LoadingListItemInfo />
                    </VStack>
                </Box>
            </HStack>
            <HStack spacing={10}>
                <Skeleton circle width={50} height={50} />
                <Box style={{ flex: 1 }}>
                    <VStack spacing={15}>
                        <LoadingListItemName />
                        <LoadingListItemInfo />
                    </VStack>
                </Box>
            </HStack>
            <HStack spacing={10}>
                <Skeleton circle width={50} height={50} />
                <Box style={{ flex: 1 }}>
                    <VStack spacing={15}>
                        <LoadingListItemName />
                        <LoadingListItemInfo />
                    </VStack>
                </Box>
            </HStack>
            <HStack spacing={10}>
                <Skeleton circle width={50} height={50} />
                <Box style={{ flex: 1 }}>
                    <VStack spacing={15}>
                        <LoadingListItemName />
                        <LoadingListItemInfo />
                    </VStack>
                </Box>
            </HStack>
            <HStack spacing={10}>
                <Skeleton circle width={50} height={50} />
                <Box style={{ flex: 1 }}>
                    <VStack spacing={15}>
                        <LoadingListItemName />
                        <LoadingListItemInfo />
                    </VStack>
                </Box>
            </HStack>
            <HStack spacing={10}>
                <Skeleton circle width={50} height={50} />
                <Box style={{ flex: 1 }}>
                    <VStack spacing={15}>
                        <LoadingListItemName />
                        <LoadingListItemInfo />
                    </VStack>
                </Box>
            </HStack>
            <HStack spacing={10}>
                <Skeleton circle width={50} height={50} />
                <Box style={{ flex: 1 }}>
                    <VStack spacing={15}>
                        <LoadingListItemName />
                        <LoadingListItemInfo />
                    </VStack>
                </Box>
            </HStack>
            <HStack spacing={10}>
                <Skeleton circle width={50} height={50} />
                <Box style={{ flex: 1 }}>
                    <VStack spacing={15}>
                        <LoadingListItemName />
                        <LoadingListItemInfo />
                    </VStack>
                </Box>
            </HStack>
        </Wrapper>
    );
}
