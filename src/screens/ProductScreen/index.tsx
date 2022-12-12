import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';
import { RootStackParams } from '../Models/route';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function ProductScreen() {
    const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

    return (
        <View>
            <Text>ProductScreen</Text>
        </View>
    );
}
