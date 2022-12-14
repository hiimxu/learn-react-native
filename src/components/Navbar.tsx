import * as React from 'react';

//LIBRARY
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

//COMPONENTS
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ServiceScreen from '../screens/ServiceScreen';
import ProductScreen from '../screens/ProductScreen';

const Tab = createBottomTabNavigator();

const Navbar: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName: string = '';

                    if (route.name === 'Customer') {
                        iconName = focused ? 'person' : 'person';
                    } else if (route.name === 'Service') {
                        iconName = focused ? 'store' : 'store';
                    } else if (route.name === 'Options') {
                        iconName = focused ? 'widgets' : 'widgets';
                    } else if (route.name === 'Product') {
                        iconName = focused ? 'inventory' : 'inventory';
                    }

                    // You can return any component that you like here!
                    return (
                        <Icon
                            name={iconName}
                            size={30}
                            color={color}
                            tvParallaxProperties={undefined}
                        />
                    );
                },
                tabBarLabel: () => undefined,
                tabBarActiveTintColor: '#52aff7',
                tabBarInactiveTintColor: 'gray',
                headerTitleStyle: {
                    lineHeight: 100,
                },
                headerStyle: {
                    height: 80,
                },
                headerTitleAlign: 'center',
            })}
        >
            <Tab.Screen
                name="Customer"
                options={{
                    title: 'Manage Customer',
                }}
                component={HomeScreen}
            />
            <Tab.Screen
                name="Product"
                options={{
                    title: 'Manage Product',
                }}
                component={ProductScreen}
            />
            <Tab.Screen
                name="Service"
                options={{
                    title: 'Manage Service',
                }}
                component={ServiceScreen}
            />
            <Tab.Screen
                name="Options"
                options={{
                    title: 'Menu',
                }}
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
};

export default Navbar;
