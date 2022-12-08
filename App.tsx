import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';

//SCREEN
import MainScreen from './src/screens/MainSceen';

//Redux
import { Provider } from 'react-redux';
import { ConfigureStore } from './src/redux/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = ConfigureStore();

export default function App() {
    const scheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ThemeProvider>
                        <NavigationContainer
                            theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
                        >
                            <MainScreen />
                            <StatusBar />
                        </NavigationContainer>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
}
