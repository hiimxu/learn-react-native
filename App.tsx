import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

//SCREEN
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <HomeScreen />
                    <StatusBar />
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
