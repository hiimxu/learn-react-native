import React from 'react';
import { View, Text } from 'react-native';
import { Dialog, Button } from '@rneui/themed';
import styled from 'styled-components';
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { HStack, Box } from '@react-native-material/core';

const ContentWrapper = styled(View)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
`;

const TextContent = styled(Text)`
    text-align: center;
`;

type Props = {
    isVisible: boolean;
    title?: any;
    content: string;
    onConfirm?: () => void;
    onClose?: () => void;
    icon?: string;
};

export default function ConfirmDialog({
    title,
    content,
    isVisible,
    onConfirm,
    onClose,
    icon,
}: Props) {
    const { colors } = useTheme();

    return (
        <Dialog
            isVisible={isVisible}
            overlayStyle={{ backgroundColor: colors.border }}
            onBackdropPress={onClose}
        >
            <Dialog.Title title={title} titleStyle={{ color: colors.text }} />
            <ContentWrapper>
                {icon && (
                    <Icon
                        name={icon}
                        color="#F24141"
                        size={40}
                        tvParallaxProperties={undefined}
                    />
                )}
                <TextContent style={{ color: colors.text }}>
                    {content}
                </TextContent>
            </ContentWrapper>
            <Dialog.Actions>
                <HStack spacing={10}>
                    <Box>
                        <Button onPress={onConfirm}>Confirm</Button>
                    </Box>
                    <Box>
                        <Button type="clear" onPress={onClose}>
                            Close
                        </Button>
                    </Box>
                </HStack>
            </Dialog.Actions>
        </Dialog>
    );
}
