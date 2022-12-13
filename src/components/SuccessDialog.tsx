import React from 'react';
import { View, Text } from 'react-native';
import { Dialog, Button } from '@rneui/themed';
import styled from 'styled-components';
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const ContentWrapper = styled(View)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TextContent = styled(Text)`
    text-align: center;
`;

type Props = {
    isVisible: boolean;
    title?: any;
    content: string;
    onPress?: () => void;
};

export default function SuccessDialog({
    title,
    content,
    isVisible,
    onPress,
}: Props) {
    const { colors } = useTheme();
    return (
        <Dialog
            isVisible={isVisible}
            overlayStyle={{ backgroundColor: colors.border }}
        >
            <Dialog.Title
                title={title ? title : 'Success'}
                titleStyle={{ color: colors.text }}
            />
            <ContentWrapper>
                <Icon
                    name="check-circle"
                    color="green"
                    size={40}
                    tvParallaxProperties={undefined}
                />
                <TextContent style={{ color: colors.text }}>
                    {content}
                </TextContent>
            </ContentWrapper>
            <Dialog.Actions>
                <Button type="clear" onPress={onPress}>
                    Close
                </Button>
            </Dialog.Actions>
        </Dialog>
    );
}
