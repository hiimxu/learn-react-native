import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MenuItem from './components/MenuItem';

export default function SettingScreen() {
    return (
        <View>
            <ScrollView>
                <MenuItem icon="moon-o" title="Dark mode" />
            </ScrollView>
        </View>
    );
}
