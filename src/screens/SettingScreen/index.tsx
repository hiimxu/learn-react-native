import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MenuItem from './components/MenuItem';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../models/route';

export default function SettingScreen() {
    //Navigation
    const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

    return (
        <View>
            <ScrollView>
                <MenuItem
                    icon="moon-o"
                    title="Dark mode"
                    onPress={() => navigate('Darkmode')}
                />
            </ScrollView>
        </View>
    );
}
