import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

//LIBRARY
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import styled from 'styled-components';

//COMPONENTS
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ServiceScreen from '../screens/ServiceScreen';

const ItemWrapper = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`;

type MyTabBarProps = {
    state: any;
    descriptors: any;
    navigation: any;
    icon?: JSX.Element;
};

const Tab = createBottomTabNavigator();

const Navbar: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = '';

                    if (route.name === 'Customer') {
                        iconName = focused ? 'person' : 'person';
                    } else if (route.name === 'Service') {
                        iconName = focused ? 'settings' : 'settings';
                    } else if (route.name === 'Options') {
                        iconName = focused ? 'list' : 'list';
                    }

                    // You can return any component that you like here!
                    return (
                        <Icon
                            name={iconName}
                            size={size}
                            color={color}
                            tvParallaxProperties={undefined}
                        />
                    );
                },
                tabBarActiveTintColor: '#0d80d8',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Customer" component={HomeScreen} />
            <Tab.Screen name="Service" component={ServiceScreen} />
            <Tab.Screen name="Options" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default Navbar;
