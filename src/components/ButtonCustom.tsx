import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';

type Props = {
    type?: 'solid' | 'clear' | 'outline' | undefined;
    title: string;
    iconName?: string;
    onPress?: () => void;
};

function ButtonCustom({ type = 'solid', title, iconName, onPress }: Props) {
    return (
        <Button
            type={type}
            title={title}
            icon={{
                name: iconName,
                type: 'font-awesome',
                size: 15,
                color: 'white',
            }}
            onPress={onPress}
        />
    );
}
export default ButtonCustom;
