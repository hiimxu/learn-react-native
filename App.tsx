import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

//SCREEN
import MainScreen from './src/screens/MainSceen';

//Redux
import { Provider } from 'react-redux';
import { ConfigureStore } from './src/redux/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';

const { store, persistor } = ConfigureStore();

const Main = () => {
    //Redux store
    const { theme } = useSelector((state: any) => state.theme);

    const [scheme, setScheme] = React.useState<
        'dark' | 'light' | null | undefined
    >();
    const colorTheme: ColorSchemeName = useColorScheme();

    React.useEffect(() => {
        if (theme) {
            setScheme(theme);
        } else if (theme === null) {
            setScheme(colorTheme);
        }
    }, [theme]);

    return (
        <PaperProvider>
            <ThemeProvider>
                <NavigationContainer
                    theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
                >
                    <MainScreen />
                    <StatusBar
                        style={
                            scheme === 'dark'
                                ? 'light'
                                : scheme === 'light'
                                ? 'dark'
                                : 'auto'
                        }
                    />
                </NavigationContainer>
            </ThemeProvider>
        </PaperProvider>
    );
};

export default function App() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Main />
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
}
