import React from 'react';
import { Button } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

type Props = {
    type?: 'solid' | 'clear' | 'outline' | undefined;
    title: string;
    iconName?: string;
    onPress?: () => void;
};

function ButtonCustom({ type = 'solid', title, iconName, onPress }: Props) {
    const { colors } = useTheme();
    return (
        <Button
            type={type}
            title={title}
            icon={{
                name: iconName,
                size: 20,
                color: colors.text,
            }}
            onPress={onPress}
        />
    );
}
export default ButtonCustom;
